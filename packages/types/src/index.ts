export interface zapInterface {
  id: string;
  name: string;
  triggerId: string;
  lastEdited: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    actionDetails: {
      id: string;
      imagePath: string;
      name: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
      imagePath: string;
    };
  };
}


export interface ItemType {
  id: string;
  name: string;
  imagePath: string;
  metadata?: itemStepMetaData[];
}

export interface ZapCreateType {
  triggerId: string;
  triggerMetadata: JSON;
  actions: {
    actionId: string;
    actionMetadata: JSON;
  }[];
}

export interface selectedItemMetaDataType {
  index:number | null | undefined,
  isOpen:boolean
}

export interface itemStepMetaData {
stepName:string,
stepNumber:number,
stepDescription?:string,
completed:boolean | null,
configureStepRequired?:boolean,
fields:Field[]
}

export interface Field {
  name: string
  fieldInputType: string
  fieldLabel: string
  fieldPlaceholder: string
  fieldValue: string | null
  required: boolean
  options?: FieldOption[]
}

export interface FieldOption {
  id: string,
  description: string,
  type: string,
}


// const webhookJson: itemStepMetaData[] =[ {
//   stepName: "Setup",
//   stepNumber: 1,
//   stepDescription: "Select the event.",
//   completed: false,
//   configureStepRequired: true,
//   fields: [
//     {
//       name:"Choose Event",
//       fieldInputType: "dropdown",
//       fieldLabel: "Trigger event",
//       fieldPlaceholder: "Choose an event",
//       fieldValue: null,
//       required: true,
//       options: [{
//         id: "Catch Hook",
//         description:"Triggers when a POST, PUT, or GET request is made to the Zapier URL.",
//         type: "instant"
//       },{
//         id: "Catch Raw Hook",
//         description:"Triggers when a POST, PUT, or GET request is made to the Zapier URL. Givers the request body unparsed (max 2 MB) and also includes headers.",
//         type: "instant"
//       }]
//     }
//   ]
// },
// {
//     stepName: "Configure",
//     stepNumber: 2,
//     stepDescription: "Configure the Zap.",
//     completed: false,
//     fields: [
//       {
//         name: "child-key",
//         fieldInputType: "text",
//         fieldLabel: "Pick off a Child Key",
//         fieldPlaceholder: "Enter text..",
//         fieldValue: null,
//         required: false,
//       }
//     ]
// }
// ]



