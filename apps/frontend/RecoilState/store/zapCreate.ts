import { atom } from "recoil";
import { ItemType } from "@repo/types";

export interface ZapCreateState {
  selectedItems: ItemType[];
  selectedCell: number | undefined;
}

export const zapCreateState = atom<ZapCreateState>({
  key: "zapCreateState",
  default: {
    selectedItems: [],
    selectedCell: undefined,
  },
});

export const zoomLevelAtom = atom<number>({
  key: "zoomLevel",
  default: 1,
});