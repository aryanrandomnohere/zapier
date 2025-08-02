"use client";
import RecoilContextProvider from "../../RecoilState/RecoilContextProvider";

export default function RecoilProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilContextProvider>{children}</RecoilContextProvider>;
}
