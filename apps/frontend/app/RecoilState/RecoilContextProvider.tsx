"use client";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";
const RecoilContextProvider = ({ children }: { children: ReactNode }) => {

    //@ts-ignore gemini
    return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilContextProvider;
