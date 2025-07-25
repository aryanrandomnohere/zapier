import express from "express";
import { AuthMiddleware } from "../Middleware/AuthMiddleware.js";
import { prisma } from "../config/client.js";
import { testActoinSchema } from "../types/index.js";
import { Field } from "@repo/types";
import { Parser, sendEmail } from "@repo/apps";
import { JsonObject } from "@repo/db/generated/client/runtime/library";
const actionRouter = express.Router();

actionRouter.get("/available", async (req, res) => {
  const actions = await prisma.availableActions.findMany();
  res.status(200).json({ items: actions });
});

actionRouter.post("testAction", async (req, res)=>{
   const parsedBody = testActoinSchema.safeParse(req.body)
   if(!parsedBody.success){
      console.log(req.body)
      res.status(400).json({success:false, msg:"Incorrect Inputs"})
      return;
   }

   const currentAction = await prisma.action.findUnique({
    where:{
      id:parsedBody.data.actionId
    },
    include:{
      actionDetails:true
    }
   })
   if(currentAction?.actionDetails.id === "email"){
    
        // console.log(currentAction)
        //@ts-ignore
        console.log(currentAction.configuration.optionConfiguration, "option id", currentAction.optionId)
         console.log((currentAction.configuration as JsonObject)
        ?.optionConfiguration[currentAction.optionId])
        const fields = (currentAction.configuration as JsonObject)
          ?.optionConfiguration[currentAction.optionId].configurationStep
          .fields;

        const toField = fields.find(
          (x: Field) => String(x.fieldLabel).toLowerCase() === "to",
        );
        const subjectField = fields.find(
          (x: Field) => String(x.fieldLabel).toLowerCase() === "subject",
        );
        const bodyField = fields.find(
          (x: Field) =>
            String(x.fieldLabel).toLowerCase() === "body (html or plain)",
        );

        const to = toField?.fieldValue ?? null;
        const subject = subjectField?.fieldValue ?? null;
        const body = bodyField?.fieldValue ?? null;
        const response = await sendEmail({ parsedTo:to,parsedBody: body,parsedSubject: subject });
        if(response.success) res.status(200).json({success:response.success, msg:`Email Sent Successfully Check Your Account ${to} For Any Latest Emails`})
          else res.status(400).json({msg:"Email was not sent", success:response.success})
        return;
        }
      
   }
  )

export default actionRouter;
