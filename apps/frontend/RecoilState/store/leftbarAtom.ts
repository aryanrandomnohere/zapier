// const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

import { zapOperations } from "@repo/types";
import { atom } from "recoil";

export const leftbarIsOpenAtom = atom({
  key: "leftbarIsOpenAtom",
  default: false,
});

export const selectedNotesAtom = atom<Set<string>>({
  key: "selectedNotesAtom",
  default: new Set(),
});

export const currentOperationAtom = atom<zapOperations | null>({
  key: "currentOperationAtom",
  default: null,
});

export const extendedStepNotesAtom = atom<string | null>({
  key: "extendedStepNotesAtom",
  default: null,
});
