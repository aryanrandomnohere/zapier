import { JsonObject } from "@repo/db/generated/client/runtime/library";
import { Field } from "@repo/types";
import sendEmail from "./email/actions/index.js";
import Parser from "./parser.js";

export default async function RunAction(currentAction: any, metadata: any) {
  try {
    if (currentAction?.actionDetails.id === "email") {
      // console.log(currentAction)
      //@ts-ignore
      console.log(
        currentAction.configuration.optionConfiguration,
        "option id",
        currentAction.optionId,
      );
      console.log(
        (currentAction.configuration as JsonObject)?.optionConfiguration[
          currentAction.optionId
        ],
      );
      const fields = (currentAction.configuration as JsonObject)
        ?.optionConfiguration[currentAction.optionId].configurationStep.fields;

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

      const to = Parser(toField?.fieldValue, "{{", "}}", metadata);
      const subject = Parser(subjectField?.fieldValue, "{{", "}}", metadata);
      const body = Parser(bodyField?.fieldValue, "{{", "}}", metadata);

      const response = await sendEmail({
        parsedTo: to,
        parsedBody: body,
        parsedSubject: subject,
      });
      if (response.success) return { success: true };
      else return { success: false };
    }
  } catch (e) {
    return { success: false, error: e };
  }
}
