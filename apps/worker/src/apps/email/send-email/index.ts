import nodemailer from "nodemailer";

export default async function sendEmail({
  parsedTo,
  parsedSubject,
  parsedBody,
}: {
  parsedTo: string;
  parsedSubject: string;
  parsedBody: string;
}) {
  console.log("🧪 Final transporter config", {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_SECRET ? "✔️ Set" : "❌ Missing",
    typeOfPort: typeof Number(process.env.SMTP_PORT), // Should say: 'number'
  });
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_SECRET,
    },
  });
  console.log(
    "to",
    parsedTo,
    "parsedSubjet",
    parsedSubject,
    "parsedbody",
    parsedBody,
  );
  const info = await transporter.sendMail({
    from: "1032230629@tcetmumbai.in",
    to: parsedTo,
    subject: parsedSubject,
    text: parsedBody,
  });

  console.log("Message sent:", info.messageId);
}
