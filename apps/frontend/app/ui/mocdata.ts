
const mockOptionConfig = {
    "Catch Hook": {
      configurationStep: {
        stepName: "Configure",
        stepNumber: 2,
        stepDescription: "Define the scheduling frequency.",
        completed: false,
        fields: [
          {
            name: "Child Key",
            fieldNumber: 0,
            fieldInputType: "text",
            fieldLabel: "Pick off a Child Key",
            fieldPlaceholder: "Enter text..",
            fieldValue: "",
            required: false,
          },
        ],
      },
      testStep: null,
    },
    "Retrieve Poll": {
      configurationStep: {
        stepName: "Configure",
        stepNumber: -1,
        stepDescription: "Define the scheduling frequency.",
        completed: false,
        fields: [
          {
            name: "url",
            fieldNumber: 0,
            fieldInputType: "text",
            fieldLabel: "URL",
            fieldPlaceholder: "Enter text..",
            fieldValue: "",
            required: true,
          },
          {
            name: "key",
            fieldNumber: 1,
            fieldInputType: "text",
            fieldLabel: "Key",
            fieldPlaceholder: "Enter text..",
            fieldValue: "",
            required: false,
          },
          {
            name: "deduplication_key",
            fieldNumber: 2,
            fieldInputType: "text",
            fieldLabel: "Deduplication Key",
            fieldPlaceholder: "Enter text..",
            fieldValue: "",
            required: false,
          },
          {
            name: "xpath",
            fieldNumber: 1,
            fieldInputType: "text",
            fieldLabel: "Xpath",
            fieldPlaceholder: "Enter text..",
            fieldValue: "",
            required: false,
          },
          {
            name: "basic_auth",
            fieldNumber: 1,
            fieldInputType: "text",
            fieldLabel: "Basic Auth",
            fieldPlaceholder: "Enter text..",
            fieldValue: "",
            required: false,
          },
        ],
      },
      testStep: {},
    },
  };
  const mockSteps: itemStepMetaData = {
    stepName: "Setup",
    stepNumber: 1,
    stepDescription: "Select the app and trigger event.",
    completed: false,
  
    fields: [
      {
        name: "triggerEvent",
        fieldNumber: 0,
        fieldInputType: "dropdown",
        fieldLabel: "Trigger Event",
        fieldPlaceholder: "Select a trigger event",
        fieldValue: "",
        required: true,
        options: [
          {
            id: "Catch Hook",
            optionIndex: 0,
            description:
              "Triggers when a POST, PUT, or GET request is made to a Zapier URL.",
            type: "instant",
          },
          {
            id: "Catch Raw Hook",
            optionIndex: 1,
            description:
              "Triggers when a POST, PUT, or GET request is made to a Zapier URL. Gives the request body unparsed (max 2 MB) and also includes headers.",
            type: "instant",
          },
          {
            id: "Retrieve Poll",
            optionIndex: 2,
            description: "Triggers when a request to a URL returns new entries.",
            type: "polling",
          },
        ],
      },
    ],
  };
  
  const MockItem = {
    id: "webhook",
    name: "Webhook",
    imagePath:
      "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=128&ixlib=python-3.0.0&q=50&w=128",
    metadata: mockSteps,
  };