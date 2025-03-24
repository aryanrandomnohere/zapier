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
    };
  };
}

export interface itemInterface {
  id: string;
  name: string;
  imagePath:string
  metaDate?:JSON
}

export interface ItemType {
  id: string;
  name: string;
  imagePath:string;
  metadate?: JSON;
}
