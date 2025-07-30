import { prisma } from "@repo/db";
import { Field, itemStepMetaData } from "@repo/types";
import express, { Request, Response } from "express";
import isEqual from "lodash.isequal";
import cors from "cors";
import { RunTrigger } from "@repo/apps";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/hooks/catch/:userId/:zapId", async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  const zapId = Number(req.params.zapId);
  const body = req.body;
  if (!zapId) return;
  const zap = await prisma.zap.findUnique({
    where: {
      id: zapId,
      // userId: userId,
    },
    select: {
      records: true,
      published: true,
      trigger: true,
    },
  });

  if (
    zap &&
    !zap.published &&
    zap.trigger &&
    typeof zap.trigger.configuration === "object" &&
    zap.trigger.configuration !== null &&
    "fields" in zap.trigger.configuration
  ) {
    const fields = (zap.trigger.configuration as unknown as { fields: Field[] })
      .fields;
    if (!fields[0].fieldValue) {
      res.json({ msg: "No Trigger Option selected" });
      return;
    }
    console.log(req.body);
    const records = await prisma.record.findMany({
      where: {
        zapId,
        triggerOptionId: fields[0].fieldValue,
      },
    });
    const matchedRecord = records.find((record) => 
      isEqual(record.JsonData, req.body),
    );

    if (matchedRecord) {
      return res.json({
        msg: "Record already exists",
        success: true,
        record: matchedRecord,
      });
    }
    const newRecord = await prisma.record.create({
      data: {
        type: "original",
        zapId,
        title: `Record ${records.length + 1}`,
        triggerOptionId: fields[0].fieldValue,
        JsonData: req.body,
      },
    });
    if (records.length == 0) {
      await prisma.zap.update({
        where: {
          id: zapId,
        },
        data: {
          RecordId: newRecord.id,
        },
      });
    }
    res.json({ msg: "Testing triggered", newRecord });
    return;
  } else {
    await prisma.$transaction(async (tx) => {
      const zapRun = await tx.zapRun.create({
        data: {
          zapId: zapId,
          metaData: body,
        },
      });
      await tx.zapRunOutbox.create({
        data: {
          zapRunId: zapRun.id,
        },
      });
    });
    res.json({ msg: "Webhook triggered" });
  }
});

app.post("/test/trigger/:zapId", async (req: Request, res: Response) => {
  const zapId = req.params.zapId;
  const trigger = await prisma.trigger.findUnique({
    where: {
      zapId: Number(zapId),
    },
    include: {
      userConnection: true,
      type: true,
    },
  });

  const matchedRecord = await prisma.record.findMany({
    where: {
      zapId: trigger?.zapId,
      triggerOptionId: trigger?.optionId,
    },
  });

  if (matchedRecord.length > 0) {
    return res.json({
      msg: "Record already exists",
      success: true,
      records: matchedRecord,
    });
  }

  console.log("Testing");
  const newRecords = await RunTrigger(trigger, "test"); // this should return an array with 3 items
  const createdRecords = [];
  console.log(newRecords);
  for (const [index, record] of newRecords.entries()) {
    console.log("Creating records");
    const createdRecord = await prisma.record.create({
      data: {
        type: "original",
        zapId: Number(trigger?.zapId),
        title: `Record ${index + 1}`,
        triggerOptionId: trigger?.optionId || "",
        JsonData: record,
      },
    });
    if (index === 0) {
      await prisma.zap.update({
        where: {
          id: Number(zapId),
        },
        data: {
          RecordId: createdRecord.id,
        },
      });
    }
    createdRecords.push(createdRecord);
  }
  console.log(createdRecords);
  res.json({ msg: "Testing triggered", records: createdRecords });
  return;
});

app.listen(3002);
