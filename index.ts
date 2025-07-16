const data = {
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
          type: "polling",
          description:
            "Triggers when a new video is uploaded that matches a specific search string.",
          optionIndex: 2,
        },
        {
          id: "New Video in Channel",
          type: "Polling",
          description:
            "Triggers when a new live stream is created or becomes active for a specific YouTube channel.",
          optionIndex: 1,
        },
        {
          id: "New Video in Playlist",
          type: "Polling",
          description: `Triggers when a new video is added to a specific playlist. Note does not work for your "watch later" playlist`,
          optionIndex: 1,
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
      required: true,
      fieldLabel: "Account",
      fieldValue: "",
      fieldNumber: 1,
      fieldInputType: "connection",
      fieldPlaceholder: "Google Account",
      appId: "google",
    },
  ],
  stepName: "Setup",
  completed: false,
  stepNumber: 1,
  stepDescription: "Select the app and trigger event.",
  optionConfiguration: {
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
        stepDescription: `The YouTube video ID to monitor for new comments. You can find this in the video URL (e.g., "dQw4w9WgXcQ" from here)`,
      },
    },
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
        stepDescription: `The YouTube Channel ID to monitor for new live streams. The Channel ID looks something like "UCsample-channel-id-123" or "channel/UCsample-channel-id-123".`,
      },
    },
    "New Video by Search": {
      testStep: {
        does: "Test your trigger",
        type: "trigger",
        stepName: "Test",
        testType: "system_triggered",
        aboutDoes:
          "To confirm your trigger is set up correctly, we'll find recent video search in your account:",
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
        stepDescription: "Search for videos that match this query",
      },
    },
    "New Video in Channel": {
      testStep: {
        does: "Test your trigger",
        type: "trigger",
        stepName: "Test",
        testType: "system_triggered",
        aboutDoes:
          "To confirm your trigger is set up correctly, we'll find recent channel video search in your account:",
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
        stepDescription: `Watch for new videos uploaded within this channel. The Channel ID looks something like this "channel/UClKO7be7O9cUGL94PHnAeOA".`,
      },
    },
    "New Video in Playlist": {
      testStep: {
        does: "Test your trigger",
        type: "trigger",
        stepName: "Test",
        testType: "system_triggered",
        aboutDoes:
          "To confirm your trigger is set up correctly, we'll find recent channel video search in your account:",
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
        stepDescription: `Watch for new videos added to this playlist. The Playlist ID is found in the url of the playlist. For example, given https://www.youtube.com/playlist?list=PL8955AC078D8F3731 the id is PL8955AC078D8F3731`,
      },
    },
  },
};
