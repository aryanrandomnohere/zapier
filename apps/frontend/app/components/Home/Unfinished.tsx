import useZaps from "../../hooks/useZaps";
import CardScroller from "./CardScroller";
import { ZapCard } from "./ZapCard";
import { TemplateCard } from "./TemplateCard";

export default function Unfinished() {
  const zaps = [
    {
      id: 47,
      triggerId: "0f24c87b-6e30-4bf8-85fe-ec41a087793f",
      name: "Untitled Zap",
      lastEdited: "2025-07-26T13:42:45.260Z",
      createdAt: "2025-07-22T08:48:44.139Z",
      published: false,
      RecordId: "f48033ad-f3fb-4d7e-9dd2-d09f5145cf6d",
      userId: 8,
      actions: [
        {
          id: "d3c0a4c0-8a43-466e-9b35-e3463e92105c",
          zapId: 47,
          configuration: {
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
                fieldValue: "Send Outbound Email",
                fieldNumber: 0,
                fieldInputType: "dropdown",
                fieldPlaceholder: "Choose an event",
              },
            ],
            stepName: "Setup",
            completed: true,
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
                      fieldValue: "{{email}}",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "subject",
                      required: true,
                      fieldLabel: "Subject",
                      fieldValue: "This email is subjected to {{fullname}}",
                      fieldNumber: 1,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "body",
                      required: true,
                      fieldLabel: "Body (HTML or Plain)",
                      fieldValue:
                        '<!DOCTYPE html> <html>   <head>     <meta charset="UTF-8" />     <title>Mock Email</title>     <style>       body {         font-family: Arial, sans-serif;         margin: 0;         padding: 0;         background-color: #f4f4f4;       }       .container {         max-width: 600px;         margin: 40px auto;         background-color: #ffffff;         padding: 20px;         border-radius: 6px;         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);       }       .header {         border-bottom: 1px solid #ddd;         padding-bottom: 10px;         margin-bottom: 20px;       }       .footer {         margin-top: 30px;         font-size: 12px;         color: #888;         text-align: center;       }       .btn {         display: inline-block;         padding: 12px 20px;         background-color: #007bff;         color: #fff !important;         text-decoration: none;         border-radius: 4px;         margin-top: 20px;       }     </style>   </head>   <body>     <div class="container">       <div class="header">         <h2>Hello {{name}} 👋</h2>       </div>       <p>Thanks for signing up for <strong>ZapierClone</strong>! We\'re excited to have you on board.</p>       <p>To get started, click the button below:</p>       <a href="https://example.com/start" class="btn">Get Started</a>       <p>If you didn’t sign up, you can safely ignore this email.</p>       <div class="footer">         &copy; 2025 ZapierClone Inc. All rights reserved.       </div>     </div>   </body> </html>',
                      fieldNumber: 2,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                  ],
                  stepName: "Configure",
                  completed: true,
                  stepNumber: 2,
                  stepDescription: "Define the scheduling frequency.",
                },
              },
            },
          },
          optionId: "Send Outbound Email",
          actionId: "email",
          sortingOrder: 1,
          connectionId: null,
          actionDetails: {
            id: "email",
            name: "Email",
            type: "action",
            serviceType: "builtIn",
            appId: null,
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
        },
      ],
      trigger: {
        id: "0f24c87b-6e30-4bf8-85fe-ec41a087793f",
        zapId: 47,
        optionId: "Catch Hook",
        optionType: "polling",
        published: false,
        configuration: {
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
              fieldValue: "Catch Hook",
              fieldNumber: 0,
              fieldInputType: "dropdown",
              fieldPlaceholder: "Select a trigger event",
            },
          ],
          stepName: "Setup",
          completed: true,
          stepNumber: 1,
          stepDescription: "Select the app and trigger event.",
          optionConfiguration: {
            "Catch Hook": {
              testStep: {
                does: "We’re listening!",
                task: {
                  title: "Your webhook URL",
                  subtitle:
                    "You’ll need to configure your application with this Zap’s webhook URL.",
                  description:
                    "We’ve generated a custom webhook URL for you to send requests to. You can silent/ if your application prefers getting an empty response.",
                  learnMoreUrl:
                    "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks",
                  learnMoreText: "Learn more about using webhooks",
                },
                type: "trigger",
                stepName: "Test",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent requests in your account: Webhooks by Zapier",
                completed: false,
                stepNumber: 3,
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
                completed: true,
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
        },
        lastPolledAt: "2025-07-27T05:03:28.819Z",
        connectionId: null,
        triggerId: "webhook",
        type: {
          id: "webhook",
          name: "Webhooks",
          type: "trigger",
          serviceType: "builtIn",
          appId: null,
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
                  task: {
                    title: "Your webhook URL",
                    subtitle:
                      "You’ll need to configure your application with this Zap’s webhook URL.",
                    description:
                      "We’ve generated a custom webhook URL for you to send requests to. You can silent/ if your application prefers getting an empty response.",
                    learnMoreUrl:
                      "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks",
                    learnMoreText: "Learn more about using webhooks",
                  },
                  type: "trigger",
                  stepName: "Test",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent requests in your account: Webhooks by Zapier",
                  completed: false,
                  stepNumber: 3,
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
          },
          imagePath:
            "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=64&ixlib=python-3.0.0&q=50&w=64",
        },
      },
    },
    {
      id: 46,
      triggerId: "498f9f4e-26cc-4f29-a88b-d3d138eafc60",
      name: "Untitled Zap",
      lastEdited: "2025-07-26T17:46:23.750Z",
      createdAt: "2025-07-22T04:13:25.767Z",
      published: false,
      RecordId: "8c63b08c-0d84-4f6e-a9a8-8828f853cb29",
      userId: 8,
      actions: [
        {
          id: "27aeeaee-280d-4c96-83ed-61eac5ea7356",
          zapId: 46,
          configuration: {
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
                fieldValue: "Send Outbound Email",
                fieldNumber: 0,
                fieldInputType: "dropdown",
                fieldPlaceholder: "Choose an event",
              },
            ],
            stepName: "Setup",
            completed: true,
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
                      fieldValue: "rrathore0303@gmail.com",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "subject",
                      required: true,
                      fieldLabel: "Subject",
                      fieldValue: "{{title}}",
                      fieldNumber: 1,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "body",
                      required: true,
                      fieldLabel: "Body (HTML or Plain)",
                      fieldValue: "{{channelId}}",
                      fieldNumber: 2,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                  ],
                  stepName: "Configure",
                  completed: true,
                  stepNumber: 2,
                  stepDescription: "Define the scheduling frequency.",
                },
              },
            },
          },
          optionId: "Send Outbound Email",
          actionId: "email",
          sortingOrder: 1,
          connectionId: null,
          actionDetails: {
            id: "email",
            name: "Email",
            type: "action",
            serviceType: "builtIn",
            appId: null,
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
        },
      ],
      trigger: {
        id: "498f9f4e-26cc-4f29-a88b-d3d138eafc60",
        zapId: 46,
        optionId: "New Video by Search",
        optionType: "polling",
        published: false,
        configuration: {
          fields: [
            {
              name: "triggerEvent",
              options: [
                {
                  id: "New Comment on Video",
                  type: "Polling",
                  description:
                    "Triggers when a new comment is posted on a specific YouTube video",
                  optionIndex: 0,
                },
                {
                  id: "New Live Stream",
                  type: "Polling",
                  description:
                    "Triggers when a new live stream is created or becomes active for a specific YouTube channel.",
                  optionIndex: 1,
                },
                {
                  id: "New Video by Search",
                  type: "Polling",
                  description:
                    "Triggers when a new video is uploaded that matches a specific search string.",
                  optionIndex: 2,
                },
                {
                  id: "New Video in Channel",
                  type: "Polling",
                  description:
                    "Triggers when a new video is uploaded to a specific YouTube channel.",
                  optionIndex: 3,
                },
                {
                  id: "New Video in Playlist",
                  type: "Polling",
                  description:
                    "Triggers when a new video is added to a specific playlist. Note: does not work for your 'watch later' playlist",
                  optionIndex: 4,
                },
              ],
              required: true,
              fieldLabel: "Trigger Event",
              fieldValue: "New Video by Search",
              fieldNumber: 0,
              fieldInputType: "dropdown",
              fieldPlaceholder: "Select a trigger event",
            },
            {
              appId: "google",
              required: true,
              fieldLabel: "Account",
              fieldValue: "1032230629@tcetmumbai.in",
              fieldNumber: 1,
              fieldInputType: "connection",
              fieldPlaceholder: "Google Account",
            },
          ],
          stepName: "Setup",
          completed: true,
          stepNumber: 1,
          stepDescription: "Select the app and trigger event.",
          optionConfiguration: {
            "New Live Stream": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find a recent live stream in your account:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "channelid",
                    required: true,
                    fieldLabel: "Channel ID",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "The YouTube Channel ID to monitor for new live streams. The Channel ID looks something like 'UCsample-channel-id-123' or 'channel/UCsample-channel-id-123'.",
              },
            },
            "New Video by Search": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent video search results in your account:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "query",
                    required: true,
                    fieldLabel: "Query",
                    fieldValue: "shorts",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: true,
                stepNumber: 2,
                stepDescription: "Search for videos that match this query.",
              },
            },
            "New Comment on Video": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent requests in your account:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "videoid",
                    required: true,
                    fieldLabel: "Video ID",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "The YouTube video ID to monitor for new comments. You can find this in the video URL (e.g., 'dQw4w9WgXcQ' from here)",
              },
            },
            "New Video in Channel": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent video uploads in this channel:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "Channel",
                    required: true,
                    fieldLabel: "Channel",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "Watch for new videos uploaded within this channel. The Channel ID looks something like 'channel/UClKO7be7O9cUGL94PHnAeOA'.",
              },
            },
            "New Video in Playlist": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recently added videos in this playlist:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "playlistid",
                    required: true,
                    fieldLabel: "Playlist Id",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "dropdown",
                    fieldPlaceholder: "Choose Value",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "Watch for new videos added to this playlist. The Playlist ID is found in the URL of the playlist. For example, given https://www.youtube.com/playlist?list=PL8955AC078D8F3731 the ID is PL8955AC078D8F3731.",
              },
            },
          },
        },
        lastPolledAt: "2025-07-27T04:58:37.979Z",
        connectionId: "424b7331-6bd4-4c2a-9344-2951df7921fc",
        triggerId: "youtube",
        type: {
          id: "youtube",
          name: "Youtube",
          type: "trigger",
          serviceType: "app",
          appId: "google",
          metadata: {
            fields: [
              {
                name: "triggerEvent",
                options: [
                  {
                    id: "New Comment on Video",
                    type: "Polling",
                    description:
                      "Triggers when a new comment is posted on a specific YouTube video",
                    optionIndex: 0,
                  },
                  {
                    id: "New Live Stream",
                    type: "Polling",
                    description:
                      "Triggers when a new live stream is created or becomes active for a specific YouTube channel.",
                    optionIndex: 1,
                  },
                  {
                    id: "New Video by Search",
                    type: "Polling",
                    description:
                      "Triggers when a new video is uploaded that matches a specific search string.",
                    optionIndex: 2,
                  },
                  {
                    id: "New Video in Channel",
                    type: "Polling",
                    description:
                      "Triggers when a new video is uploaded to a specific YouTube channel.",
                    optionIndex: 3,
                  },
                  {
                    id: "New Video in Playlist",
                    type: "Polling",
                    description:
                      "Triggers when a new video is added to a specific playlist. Note: does not work for your 'watch later' playlist",
                    optionIndex: 4,
                  },
                ],
                required: true,
                fieldLabel: "Trigger Event",
                fieldValue: "",
                fieldNumber: 0,
                fieldInputType: "dropdown",
                fieldPlaceholder: "Select a trigger event",
              },
              {
                appId: "google",
                required: true,
                fieldLabel: "Account",
                fieldValue: "",
                fieldNumber: 1,
                fieldInputType: "connection",
                fieldPlaceholder: "Google Account",
              },
            ],
            stepName: "Setup",
            completed: false,
            stepNumber: 1,
            stepDescription: "Select the app and trigger event.",
            optionConfiguration: {
              "New Live Stream": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find a recent live stream in your account:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "channelid",
                      required: true,
                      fieldLabel: "Channel ID",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "The YouTube Channel ID to monitor for new live streams. The Channel ID looks something like 'UCsample-channel-id-123' or 'channel/UCsample-channel-id-123'.",
                },
              },
              "New Video by Search": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent video search results in your account:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "query",
                      required: true,
                      fieldLabel: "Query",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription: "Search for videos that match this query.",
                },
              },
              "New Comment on Video": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent requests in your account:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "videoid",
                      required: true,
                      fieldLabel: "Video ID",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "The YouTube video ID to monitor for new comments. You can find this in the video URL (e.g., 'dQw4w9WgXcQ' from here)",
                },
              },
              "New Video in Channel": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent video uploads in this channel:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "Channel",
                      required: true,
                      fieldLabel: "Channel",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "Watch for new videos uploaded within this channel. The Channel ID looks something like 'channel/UClKO7be7O9cUGL94PHnAeOA'.",
                },
              },
              "New Video in Playlist": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recently added videos in this playlist:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "playlistid",
                      required: true,
                      fieldLabel: "Playlist Id",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "dropdown",
                      fieldPlaceholder: "Choose Value",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "Watch for new videos added to this playlist. The Playlist ID is found in the URL of the playlist. For example, given https://www.youtube.com/playlist?list=PL8955AC078D8F3731 the ID is PL8955AC078D8F3731.",
                },
              },
            },
          },
          imagePath:
            "https://zapier-images.imgix.net/storage/services/7633e61620664fb3a71911729ebce5ea.png?auto=format&fit=crop&h=20&ixlib=react-9.8.1&q=50&w=20",
        },
      },
    },
    {
      id: 44,
      triggerId: "ad5e63e1-d459-4286-9a46-649e03cb001c",
      name: "Untitled Zap",
      lastEdited: "2025-07-26T17:46:33.324Z",
      createdAt: "2025-07-21T14:01:06.500Z",
      published: false,
      RecordId: "dbaaaf97-2771-4c2a-a890-1d9ef8d34271",
      userId: 8,
      actions: [
        {
          id: "de244e17-b4af-4db7-8c1b-92823c006fb6",
          zapId: 44,
          configuration: {
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
                fieldValue: "Send Outbound Email",
                fieldNumber: 0,
                fieldInputType: "dropdown",
                fieldPlaceholder: "Choose an event",
              },
            ],
            stepName: "Setup",
            completed: true,
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
                      fieldValue: "rrathore0303@gmail.com",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "subject",
                      required: true,
                      fieldLabel: "Subject",
                      fieldValue: "{{title}}",
                      fieldNumber: 1,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "body",
                      required: true,
                      fieldLabel: "Body (HTML or Plain)",
                      fieldValue:
                        "{{thumbnails.high.url}} was published at {{publishTime}}",
                      fieldNumber: 2,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                  ],
                  stepName: "Configure",
                  completed: true,
                  stepNumber: 2,
                  stepDescription: "Define the scheduling frequency.",
                },
              },
            },
          },
          optionId: "Send Outbound Email",
          actionId: "email",
          sortingOrder: 1,
          connectionId: null,
          actionDetails: {
            id: "email",
            name: "Email",
            type: "action",
            serviceType: "builtIn",
            appId: null,
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
        },
      ],
      trigger: {
        id: "ad5e63e1-d459-4286-9a46-649e03cb001c",
        zapId: 44,
        optionId: "New Video by Search",
        optionType: "polling",
        published: false,
        configuration: {
          fields: [
            {
              name: "triggerEvent",
              options: [
                {
                  id: "New Comment on Video",
                  type: "Polling",
                  description:
                    "Triggers when a new comment is posted on a specific YouTube video",
                  optionIndex: 0,
                },
                {
                  id: "New Live Stream",
                  type: "Polling",
                  description:
                    "Triggers when a new live stream is created or becomes active for a specific YouTube channel.",
                  optionIndex: 1,
                },
                {
                  id: "New Video by Search",
                  type: "Polling",
                  description:
                    "Triggers when a new video is uploaded that matches a specific search string.",
                  optionIndex: 2,
                },
                {
                  id: "New Video in Channel",
                  type: "Polling",
                  description:
                    "Triggers when a new video is uploaded to a specific YouTube channel.",
                  optionIndex: 3,
                },
                {
                  id: "New Video in Playlist",
                  type: "Polling",
                  description:
                    "Triggers when a new video is added to a specific playlist. Note: does not work for your 'watch later' playlist",
                  optionIndex: 4,
                },
              ],
              required: true,
              fieldLabel: "Trigger Event",
              fieldValue: "New Video by Search",
              fieldNumber: 0,
              fieldInputType: "dropdown",
              fieldPlaceholder: "Select a trigger event",
            },
            {
              appId: "google",
              required: true,
              fieldLabel: "Account",
              fieldValue: "1032230629@tcetmumbai.in",
              fieldNumber: 1,
              fieldInputType: "connection",
              fieldPlaceholder: "Google Account",
            },
          ],
          stepName: "Setup",
          completed: true,
          stepNumber: 1,
          stepDescription: "Select the app and trigger event.",
          optionConfiguration: {
            "New Live Stream": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find a recent live stream in your account:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "channelid",
                    required: true,
                    fieldLabel: "Channel ID",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "The YouTube Channel ID to monitor for new live streams. The Channel ID looks something like 'UCsample-channel-id-123' or 'channel/UCsample-channel-id-123'.",
              },
            },
            "New Video by Search": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent video search results in your account:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "query",
                    required: true,
                    fieldLabel: "Query",
                    fieldValue: "avengeres",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: true,
                stepNumber: 2,
                stepDescription: "Search for videos that match this query.",
              },
            },
            "New Comment on Video": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent requests in your account:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "videoid",
                    required: true,
                    fieldLabel: "Video ID",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "The YouTube video ID to monitor for new comments. You can find this in the video URL (e.g., 'dQw4w9WgXcQ' from here)",
              },
            },
            "New Video in Channel": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent video uploads in this channel:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "Channel",
                    required: true,
                    fieldLabel: "Channel",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "text",
                    fieldPlaceholder: "Enter text..",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "Watch for new videos uploaded within this channel. The Channel ID looks something like 'channel/UClKO7be7O9cUGL94PHnAeOA'.",
              },
            },
            "New Video in Playlist": {
              testStep: {
                does: "Test your trigger",
                type: "trigger",
                stepName: "Test",
                testType: "system_triggered",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recently added videos in this playlist:",
                completed: false,
                stepNumber: 3,
              },
              configurationStep: {
                fields: [
                  {
                    name: "playlistid",
                    required: true,
                    fieldLabel: "Playlist Id",
                    fieldValue: "",
                    fieldNumber: 0,
                    fieldInputType: "dropdown",
                    fieldPlaceholder: "Choose Value",
                  },
                ],
                stepName: "Configure",
                completed: false,
                stepNumber: 2,
                stepDescription:
                  "Watch for new videos added to this playlist. The Playlist ID is found in the URL of the playlist. For example, given https://www.youtube.com/playlist?list=PL8955AC078D8F3731 the ID is PL8955AC078D8F3731.",
              },
            },
          },
        },
        lastPolledAt: "2025-07-27T04:58:38.395Z",
        connectionId: "424b7331-6bd4-4c2a-9344-2951df7921fc",
        triggerId: "youtube",
        type: {
          id: "youtube",
          name: "Youtube",
          type: "trigger",
          serviceType: "app",
          appId: "google",
          metadata: {
            fields: [
              {
                name: "triggerEvent",
                options: [
                  {
                    id: "New Comment on Video",
                    type: "Polling",
                    description:
                      "Triggers when a new comment is posted on a specific YouTube video",
                    optionIndex: 0,
                  },
                  {
                    id: "New Live Stream",
                    type: "Polling",
                    description:
                      "Triggers when a new live stream is created or becomes active for a specific YouTube channel.",
                    optionIndex: 1,
                  },
                  {
                    id: "New Video by Search",
                    type: "Polling",
                    description:
                      "Triggers when a new video is uploaded that matches a specific search string.",
                    optionIndex: 2,
                  },
                  {
                    id: "New Video in Channel",
                    type: "Polling",
                    description:
                      "Triggers when a new video is uploaded to a specific YouTube channel.",
                    optionIndex: 3,
                  },
                  {
                    id: "New Video in Playlist",
                    type: "Polling",
                    description:
                      "Triggers when a new video is added to a specific playlist. Note: does not work for your 'watch later' playlist",
                    optionIndex: 4,
                  },
                ],
                required: true,
                fieldLabel: "Trigger Event",
                fieldValue: "",
                fieldNumber: 0,
                fieldInputType: "dropdown",
                fieldPlaceholder: "Select a trigger event",
              },
              {
                appId: "google",
                required: true,
                fieldLabel: "Account",
                fieldValue: "",
                fieldNumber: 1,
                fieldInputType: "connection",
                fieldPlaceholder: "Google Account",
              },
            ],
            stepName: "Setup",
            completed: false,
            stepNumber: 1,
            stepDescription: "Select the app and trigger event.",
            optionConfiguration: {
              "New Live Stream": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find a recent live stream in your account:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "channelid",
                      required: true,
                      fieldLabel: "Channel ID",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "The YouTube Channel ID to monitor for new live streams. The Channel ID looks something like 'UCsample-channel-id-123' or 'channel/UCsample-channel-id-123'.",
                },
              },
              "New Video by Search": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent video search results in your account:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "query",
                      required: true,
                      fieldLabel: "Query",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription: "Search for videos that match this query.",
                },
              },
              "New Comment on Video": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent requests in your account:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "videoid",
                      required: true,
                      fieldLabel: "Video ID",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "The YouTube video ID to monitor for new comments. You can find this in the video URL (e.g., 'dQw4w9WgXcQ' from here)",
                },
              },
              "New Video in Channel": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent video uploads in this channel:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "Channel",
                      required: true,
                      fieldLabel: "Channel",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text..",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "Watch for new videos uploaded within this channel. The Channel ID looks something like 'channel/UClKO7be7O9cUGL94PHnAeOA'.",
                },
              },
              "New Video in Playlist": {
                testStep: {
                  does: "Test your trigger",
                  type: "trigger",
                  stepName: "Test",
                  testType: "system_triggered",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recently added videos in this playlist:",
                  completed: false,
                  stepNumber: 3,
                },
                configurationStep: {
                  fields: [
                    {
                      name: "playlistid",
                      required: true,
                      fieldLabel: "Playlist Id",
                      fieldValue: "",
                      fieldNumber: 0,
                      fieldInputType: "dropdown",
                      fieldPlaceholder: "Choose Value",
                    },
                  ],
                  stepName: "Configure",
                  completed: false,
                  stepNumber: 2,
                  stepDescription:
                    "Watch for new videos added to this playlist. The Playlist ID is found in the URL of the playlist. For example, given https://www.youtube.com/playlist?list=PL8955AC078D8F3731 the ID is PL8955AC078D8F3731.",
                },
              },
            },
          },
          imagePath:
            "https://zapier-images.imgix.net/storage/services/7633e61620664fb3a71911729ebce5ea.png?auto=format&fit=crop&h=20&ixlib=react-9.8.1&q=50&w=20",
        },
      },
    },
    {
      id: 48,
      triggerId: "3d8d5545-0f41-44bd-a559-a0a5833e309a",
      name: "Untitled Zap",
      lastEdited: "2025-07-27T05:20:49.842Z",
      createdAt: "2025-07-26T13:56:40.534Z",
      published: false,
      RecordId: null,
      userId: 8,
      actions: [
        {
          id: "d811271e-7196-41be-9ea1-7e8890b49bc7",
          zapId: 48,
          configuration: {
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
                fieldValue: "Send Outbound Email",
                fieldNumber: 0,
                fieldInputType: "dropdown",
                fieldPlaceholder: "Choose an event",
              },
            ],
            stepName: "Setup",
            completed: true,
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
                      fieldValue: "aryanrathoreop@gmail.com",
                      fieldNumber: 0,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "subject",
                      required: true,
                      fieldLabel: "Subject",
                      fieldValue: "Hi there",
                      fieldNumber: 1,
                      fieldInputType: "text",
                      fieldPlaceholder: "Enter text or insert data...",
                    },
                    {
                      name: "body",
                      required: true,
                      fieldLabel: "Body (HTML or Plain)",
                      fieldValue: "Hey this is the body part",
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
          optionId: "Send Outbound Email",
          actionId: "email",
          sortingOrder: 1,
          connectionId: null,
          actionDetails: {
            id: "email",
            name: "Email",
            type: "action",
            serviceType: "builtIn",
            appId: null,
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
        },
      ],
      trigger: {
        id: "3d8d5545-0f41-44bd-a559-a0a5833e309a",
        zapId: 48,
        optionId: "Catch Hook",
        optionType: "polling",
        published: false,
        configuration: {
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
              fieldValue: "Catch Hook",
              fieldNumber: 0,
              fieldInputType: "dropdown",
              fieldPlaceholder: "Select a trigger event",
            },
          ],
          stepName: "Setup",
          completed: true,
          stepNumber: 1,
          stepDescription: "Select the app and trigger event.",
          optionConfiguration: {
            "Catch Hook": {
              testStep: {
                does: "We’re listening!",
                task: {
                  title: "Your webhook URL",
                  subtitle:
                    "You’ll need to configure your application with this Zap’s webhook URL.",
                  description:
                    "We’ve generated a custom webhook URL for you to send requests to. You can silent/ if your application prefers getting an empty response.",
                  learnMoreUrl:
                    "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks",
                  learnMoreText: "Learn more about using webhooks",
                },
                type: "trigger",
                stepName: "Test",
                aboutDoes:
                  "To confirm your trigger is set up correctly, we'll find recent requests in your account: Webhooks by Zapier",
                completed: false,
                stepNumber: 3,
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
                completed: true,
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
        },
        lastPolledAt: null,
        connectionId: null,
        triggerId: "webhook",
        type: {
          id: "webhook",
          name: "Webhooks",
          type: "trigger",
          serviceType: "builtIn",
          appId: null,
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
                  task: {
                    title: "Your webhook URL",
                    subtitle:
                      "You’ll need to configure your application with this Zap’s webhook URL.",
                    description:
                      "We’ve generated a custom webhook URL for you to send requests to. You can silent/ if your application prefers getting an empty response.",
                    learnMoreUrl:
                      "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks",
                    learnMoreText: "Learn more about using webhooks",
                  },
                  type: "trigger",
                  stepName: "Test",
                  aboutDoes:
                    "To confirm your trigger is set up correctly, we'll find recent requests in your account: Webhooks by Zapier",
                  completed: false,
                  stepNumber: 3,
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
          },
          imagePath:
            "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=64&ixlib=python-3.0.0&q=50&w=64",
        },
      },
    },
  ];

  const unfinishedZaps = zaps.filter((zap) => !zap.published);
  return (
    <div className="space-y-10">
      {/* Get Started */}
      {/* ... Your existing get started card ... */}

      {/* Unfinished Zaps */}
      <CardScroller title="Unfinished Zaps">
        {unfinishedZaps.map((zap) => (
          <ZapCard
            id={zap.id}
            key={zap.id}
            name={zap.name}
            lastEdited={formatEditedTime(zap.lastEdited)}
            triggerImage={zap.trigger?.type?.imagePath}
            actions={zap.actions.map((a) => ({
              imagePath: a.actionDetails?.imagePath,
            }))}
          />
        ))}
      </CardScroller>

      {/* Popular Templates */}
      {/* <CardScroller
        title="Popular templates"
        rightSlot={<a className="text-sm text-indigo-600" href="#">Browse all templates</a>}
      >
        <TemplateCard
          icon="/icons/slack.svg"
          title="Send Slack notifications if your Zaps run into errors"
          badgeText="🔥 New to trending"
        />
        <TemplateCard
          icon="/icons/wave.svg"
          title="Add new Wave invoices to Google Sheets rows"
          badgeText="🔥 New to trending"
        />
        {/* ...more cards */}
      {/* </CardScroller> */}
    </div>
  );
}

function formatEditedTime(lastEdited: string): string {
  const editedDate = new Date(lastEdited);
  const diffMs = Date.now() - editedDate.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 60) return `${diffMins} minutes ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hours ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}
