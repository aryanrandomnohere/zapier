import { RecordMetadata } from "@repo/types";

export const mockRecords: RecordMetadata[] = [
  {
    id: "1",
    type: "modified",
    title: "Modified Record",
    createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
    pulledAt: new Date().toISOString(),
    JsonData: {
      parentemail: "aryanrathoreop@gmail.com",
      myotheremail: "other@example.com",
      email: "modified1@example.com",
    },
  },
  // {
  //   id: "2",
  //   type: "original",
  //   title: "Request E",
  //   createdAt: new Date().toISOString(),
  //   pulledAt: new Date().toISOString(),
  //   JsonData: {
  //     parentemail: "parentE@example.com",
  //     myotheremail: "altE@example.com",
  //     email: "recordE@example.com"
  //   }
  // },
  // {
  //   id: "3",
  //   type: "original",
  //   title: "Request D",
  //   createdAt: new Date().toISOString(),
  //   pulledAt: new Date().toISOString(),
  //   JsonData: {
  //     parentemail: "parentD@example.com",
  //     myotheremail: "altD@example.com",
  //     email: "recordD@example.com"
  //   }
  // },
  // {
  //   id: "4",
  //   type: "original",
  //   title: "Request C",
  //   createdAt: new Date().toISOString(),
  //   pulledAt: new Date().toISOString(),
  //   JsonData: {
  //     parentemail: "parentC@example.com",
  //     myotheremail: "altC@example.com",
  //     email: "recordC@example.com"
  //   }
  // },
  // {
  //   id: "5",
  //   type: "original",
  //   title: "Request B",
  //   createdAt: new Date().toISOString(),
  //   pulledAt: new Date().toISOString(),
  //   JsonData: {
  //     parentemail: "parentB@example.com",
  //     myotheremail: "altB@example.com",
  //     email: "recordB@example.com"
  //   }
  // },
  // {
  //   id: "6",
  //   type: "original",
  //   title: "Request A",
  //   createdAt: new Date().toISOString(),
  //   pulledAt: new Date().toISOString(),
  //   JsonData: {
  //     parentemail: "parentA@example.com",
  //     myotheremail: "altA@example.com",
  //     email: "recordA@example.com"
  //   }
  // }
];
