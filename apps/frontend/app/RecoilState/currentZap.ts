import { atom } from "recoil";
import { ItemType, selectedItemMetaDataType } from "../../../../packages/types/src";



export const selectedTrigger  = atom<ItemType>({
    key:"selectedTrigger",
    default:{
        id:"",
        name:"",
        imagePath:""
    }
})

export const selectedAction = atom<ItemType[]>({
   key:"selectedAction",
   default:[] 
})


export const currentZap = atom<null | number>({
    key:"currentZap",
    default: null
})

export const configureStepDetails = atom({
    key:"configureStep",
    default:{
        configureStep:false,
        fieldIndex:-1,
        optionIndex:-1,
    }

})


export const selectedItemMetaData = atom< selectedItemMetaDataType>({
    key:"",
    default:{
        index:null,
        isOpen:false
    }
})
