import { atom } from "recoil";
import {
  ItemType,
  onStepEnum,
  selectedItemMetaDataType,
} from "../../../../packages/types/src";

// export const selectedTrigger = atom<ItemType>({
//   key: "selectedTrigger",
//   default: {
//     id: "",
//     name: "",
//     imagePath: "",

//   },
// });

export const selectedAction = atom<ItemType[]>({
  key: "selectedAction",
  default: [],
});

export const currentZap = atom<null | number>({
  key: "currentZap",
  default: null,
});

export const configureStepDetails = atom({
  key: "configureStep",
  default: "",
});

export const OptionChanged = atom({
  key: "optionChanged",
  default: 0,
});

export const onStep = atom({
  key: "OnStep",
  default: onStepEnum.SETUP,
});

export const selectedItemMetaData = atom<selectedItemMetaDataType>({
  key: "",
  default: {
    index: null,
    isOpen: false,
  },
});
