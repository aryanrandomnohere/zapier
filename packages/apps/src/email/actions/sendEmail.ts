import nodemailer from "nodemailer";
import Parser from "../../shared/utils/parser.js";
import { Field } from "@repo/types";

/**
 * Handles sending email via nodemailer
 * Expects fields: "to", "subject", "body (html or plain)"
 */
export default async function sendEmailAction({
  fields,
  metadata,
}: {
  fields: Field[];
  metadata: any;
}) {
  // Helper to fetch field value by label
  console.log("this email is being sent to", fields);

  const getFieldValue = (label: string) =>
    fields.find((x) => String(x.fieldLabel).toLowerCase() === label)
      ?.fieldValue || "";

  // Parse values (support {{variable}} placeholders)
  const parsedTo = Parser(getFieldValue("to"), "{{", "}}", metadata);
  const parsedSubject = Parser(getFieldValue("subject"), "{{", "}}", metadata);
  const parsedBody = Parser(
    getFieldValue("body (html or plain)"),
    "{{",
    "}}",
    metadata,
  );

  // Validate required fields
  if (!parsedTo || !parsedSubject || !parsedBody) {
    console.log(
      "some fields are missing i am returnin ",
      parsedBody,
      parsedTo,
      parsedSubject,
    );
    return {
      success: false,
      error: "Missing required email fields (to, subject, body)",
    };
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_SECRET,
    },
  });
  // Send mail
  const info = await transporter.sendMail({
    from: "aryanrathoreop@gmail.com",
    to: parsedTo,
    subject: parsedSubject,
    text: parsedBody,
  });

  // Return result
  if (info.messageId) {
    console.log("message sent", info.messageId);
    return { success: true, id: info.messageId, msg: "Message sent" };
  } else {
    return { success: false, error: "Message failed to send" };
  }
}
