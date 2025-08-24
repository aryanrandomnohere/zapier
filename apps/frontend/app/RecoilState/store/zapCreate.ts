// Add this to your existing store file: /RecoilState/store/zapCreate.ts

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

export const zoomLevelAtom = atom<number>({
  key: "zoomLevelAtom",
  default: 1,
});

// NEW: Global state to trigger zoom to fit
export const zoomToFitTriggerAtom = atom<boolean>({
  key: "zoomToFitTriggerAtom",
  default: false,
});

// NEW: Global state for zap position
export const zapPositionAtom = atom<{ x: number; y: number }>({
  key: "zapPositionAtom",
  default: { x: 0, y: 0 },
});
