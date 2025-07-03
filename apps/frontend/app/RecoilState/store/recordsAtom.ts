import { RecordMetadata } from "@repo/types";
import { atom } from "recoil";

export const recordsAtom = atom<RecordMetadata[]>({
    key:"RecordMetadata",
    default: []
})

export const selectedRecord = atom<string>({
    key:"selectedRecord",
    default:""
})