import { folderInterface } from "@repo/types";
import { atom } from "recoil";

interface zapInterface {
  id: number;
  name: string;
  published: boolean;
  lastEdited: string;
  triggerId: string;
  userId: number;
  trigger: {
    id: string;
    type: {
      imagePath: string;
      name: string;
    };
    metadata?: JSON;
  };
  actions: {
    id: string;
    actionDetails: {
      id: string;
      imagePath: string;
    };
    metadata?: JSON;
  }[];
  user: {
    firstname: string;
    lastname: string;
  };
  folder: folderInterface; // to avoid circular dependency
}

const zapAtom = atom<zapInterface[]>({ key: "zapAtom", default: [] });

export default zapAtom;
