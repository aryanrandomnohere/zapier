import { prisma, ZapRunStatus } from "@repo/db";
import Express from "express";
import asyncHandler from "../utils/asyncFunction.js";

const zapRunRouter = Express.Router();

// GET Zap Runs with filters
zapRunRouter.get("/:zapId", asyncHandler(async (req, res) => {
  try {
    const { zapId } = req.params;
    const { status, fromDate, toDate } = req.query;

    // Build filters dynamically
    const filters: any = { zapId: parseInt(zapId) };

    if (
      status &&
      Object.values(ZapRunStatus).includes(status as ZapRunStatus)
    ) {
      filters.status = status as ZapRunStatus;
    }

    if (fromDate || toDate) {
      filters.createdAt = {};
      if (fromDate) filters.createdAt.gte = new Date(fromDate as string);
      if (toDate) filters.createdAt.lte = new Date(toDate as string);
    }

    const zapRuns = await prisma.zapRun.findMany({
      where: filters,
      orderBy: { createdAt: "desc" },
      include: {
        zap: {
          select: {
            name: true,
            actions: {
              select: {
                actionDetails: {
                  select: { name: true, id: true },
                },
              },
            },
          },
        },
      },
    });

    res.json(zapRuns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Zap runs" });
  }
}));

export default zapRunRouter;
