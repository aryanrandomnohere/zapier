"use client";
import { List } from "lucide-react";
import { sidebarIsOpenAtom } from "../RecoilState/store/sidebarAtom";
import { useRecoilState } from "recoil";

export default function SideBarList() {
  const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarIsOpenAtom);
  console.log(sidebarIsOpen);
  return (
    <div onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
      {" "}
      <List className="block md:hidden" />
    </div>
  );
}
