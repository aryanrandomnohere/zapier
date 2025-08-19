import { atom } from "recoil";
import { ItemType } from "../../../../../packages/types/src";

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
