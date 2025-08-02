"use client";
import CreateButton from "./CreateButton";
import RecoilProvider from "./RecoilProvider";

export default function Button() {
  return (
    <RecoilProvider>
      <CreateButton />{" "}
    </RecoilProvider>
  );
}
