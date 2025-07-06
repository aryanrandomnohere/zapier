import { PrismaClient } from "../generated/client/index.js";
const client = new PrismaClient();

async function main() {
  await client.availableTriggers.create({
    data: {
      id: "webhook",
      name: "Webhooks by Zapier",
      metadata: {
        fields: [
          {
            name: "triggerEvent",
            options: [
              {
                id: "Catch Hook",
                type: "instant",
                description:
                  "Triggers when a POST, PUT, or GET request is made to a Zapier URL.",
                optionIndex: 0,
              },
              {
                id: "Catch Raw Hook",
                type: "instant",
                description:
                  "Triggers when a POST, PUT, or GET request is made to a Zapier URL. Gives the request body unparsed (max 2 MB) and also includes headers.",
                optionIndex: 1,
              },
              {
                id: "Retrieve Poll",
                type: "polling",
                description:
                  "Triggers when a request to a URL returns new entries.",
                optionIndex: 2,
              },
            ],
            required: true,
            fieldLabel: "Trigger Event",
            fieldValue: "",
            fieldNumber: 0,
            fieldInputType: "dropdown",
            fieldPlaceholder: "Select a trigger event",
          },
        ],
        stepName: "Setup",
        completed: false,
        stepNumber: 1,
        stepDescription: "Select the app and trigger event.",
        optionConfiguration: {
          "Catch Hook": {
            testStep: {
              does: "We’re listening!",
              type: "trigger",
              stepName: "Test",
              testType: "user_triggered",
              aboutDoes:
                "To confirm your trigger is set up correctly, we'll find recent requests in your account: Webhooks by Zapier",
              completed: false,
              stepNumber: 3,
              userTriggered: {
                title: "Your webhook URL",
                subtitle:
                  "You’ll need to configure your application with this Zap’s webhook URL.",
                description:
                  "We’ve generated a custom webhook URL for you to send requests to. You can silent/ if your application prefers getting an empty response.",
                learnMoreUrl:
                  "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks",
                learnMoreText: "Learn more about using webhooks",
              },
            },
            configurationStep: {
              fields: [
                {
                  name: "Child Key",
                  required: false,
                  fieldLabel: "Pick off a Child Key",
                  fieldValue: "",
                  fieldNumber: 0,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text..",
                },
              ],
              stepName: "Configure",
              completed: false,
              stepNumber: 2,
              stepDescription: "Define the scheduling frequency.",
            },
          },
          "Retrieve Poll": {
            testStep: {
              does: "Test your trigger",
              type: "trigger",
              stepName: "Test",
              testType: "system_triggered",
              aboutDoes:
                "We'll poll your webhook URL and look for new entries to make sure your trigger is working.",
              completed: false,
              stepNumber: 3,
            },
            configurationStep: {
              fields: [
                {
                  name: "url",
                  required: true,
                  fieldLabel: "URL",
                  fieldValue: "",
                  fieldNumber: 0,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text..",
                },
                {
                  name: "key",
                  required: false,
                  fieldLabel: "Key",
                  fieldValue: "",
                  fieldNumber: 1,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text..",
                },
                {
                  name: "deduplication_key",
                  required: false,
                  fieldLabel: "Deduplication Key",
                  fieldValue: "",
                  fieldNumber: 2,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text..",
                },
                {
                  name: "xpath",
                  required: false,
                  fieldLabel: "Xpath",
                  fieldValue: "",
                  fieldNumber: 3,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text..",
                },
                {
                  name: "basic_auth",
                  required: false,
                  fieldLabel: "Basic Auth",
                  fieldValue: "",
                  fieldNumber: 4,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text..",
                },
              ],
              stepName: "Configure",
              completed: false,
              stepNumber: -1,
              stepDescription: "Define the scheduling frequency.",
            },
          },
          "Catch Raw Hook": {
            testStep: {
              does: "We’re listening!",
              type: "trigger",
              stepName: "Test",
              testType: "user_triggered",
              aboutDoes:
                "To confirm your trigger is set up correctly, we'll find recent requests in your account: Webhooks by Zapier",
              completed: false,
              stepNumber: 3,
              description:
                "We’ve generated a custom webhook URL for you to send requests to. You can add silent/ if your application prefers getting an empty response. Learn more about using webhooks.",
            },
            configurationStep: null,
          },
        },
        imagePath:
          "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=64&ixlib=python-3.0.0&q=50&w=64",
      },
    },
  });

  await client.availableActions.create({
    data: {
      id: "email",
      name: "Email",
      imagePath:
        "https://zapier-images.imgix.net/storage/services/8e4d4d03bfde581f2550934c589fb077.png?auto=format%2Ccompress&fit=crop&h=64&ixlib=python-3.0.0&q=50&w=64",
      metadata: {
        fields: [
          {
            name: "actionEvent",
            options: [
              {
                id: "Send Outbound Email",
                type: "instant",
                description:
                  "Send up to 5 emails per day on Free or Trial Zapier plans, or up to 10 emails per hour on paid Zapier plans from a custom zapiermail.com address",
                optionIndex: 0,
              },
            ],
            required: true,
            fieldLabel: "Action event",
            fieldValue: "",
            fieldNumber: 0,
            fieldInputType: "dropdown",
            fieldPlaceholder: "Choose an event",
          },
        ],
        stepName: "Setup",
        completed: false,
        stepNumber: 1,
        stepDescription: "Select the app and trigger event.",
        optionConfiguration: {
          "Send Outbound Email": {
            testStep: {
              does: "Send outbound email",
              type: "action",
              stepName: "Test",
              aboutDoes:
                "To test Email by Zapier, we’ll create a new outbound email. This is what will be created:",
              completed: false,
              stepNumber: 3,
            },
            configurationStep: {
              fields: [
                {
                  name: "to",
                  required: true,
                  fieldLabel: "To",
                  fieldValue: "",
                  fieldNumber: 0,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text or insert data...",
                },
                {
                  name: "subject",
                  required: true,
                  fieldLabel: "Subject",
                  fieldValue: "",
                  fieldNumber: 1,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text or insert data...",
                },
                {
                  name: "body",
                  required: true,
                  fieldLabel: "Body (HTML or Plain)",
                  fieldValue: "",
                  fieldNumber: 2,
                  fieldInputType: "text",
                  fieldPlaceholder: "Enter text or insert data...",
                },
              ],
              stepName: "Configure",
              completed: false,
              stepNumber: 2,
              stepDescription: "Define the scheduling frequency.",
            },
          },
        },
      },
    },
  });
}
main();
