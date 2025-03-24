'use client'
import { createSlice } from "@reduxjs/toolkit"
import { ItemType } from "../../../types/index";
export interface currentSelectedZapStateType {
    index: number | null; 
}

const initialState = {
index: null,
zaps<ItemType []>:[{id:"",name:"",imagePath:""}]
}


export const currentSelectedZapState = createSlice({
    name:"currentZap",
    initialState,
    reducers:{
        setSelectedZap(new_index): (state)=>{state.index = }
    }
})

export default currentSelectedZapState.reducer;
