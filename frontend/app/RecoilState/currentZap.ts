import { atom } from "recoil";
import { ItemType } from "../types";



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
