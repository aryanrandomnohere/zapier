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
  metadata?: JSON;
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


