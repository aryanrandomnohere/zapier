'use client'
import { configureStore } from "@reduxjs/toolkit"
import {currentSelectedZapState} from "./Features/zap/zapCellSlice"

export const store = configureStore({
    reducer:{
        zapCell:currentSelectedZapState
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;