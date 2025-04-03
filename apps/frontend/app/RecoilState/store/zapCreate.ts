import { atom } from "recoil";
import { ItemType } from "../../../../../packages/types/src";

export interface ZapCreateState {
  selectedItems: ItemType[];
  selectedCell: number | undefined;
  isDragging: boolean;
  position: { x: number; y: number };
  initialPosition: { x: number; y: number };
}


export const zapCreateState = atom<ZapCreateState>({
  key: "zapCreateState",
  default: {
    selectedItems: [],
    selectedCell: undefined,
    isDragging: false,
    position: { x: 0, y: 0 },
    initialPosition: { x: 0, y: 0 }
  }
}); 