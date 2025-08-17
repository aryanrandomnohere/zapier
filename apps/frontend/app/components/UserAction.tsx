"use client";
import DropDownMenu from "../ui/DropDownMenu";
import Cookies from "js-cookie";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../RecoilState/store/userAtom";
import { getSession, signOut } from "next-auth/react";
import { Check, LogOut, Settings } from "lucide-react";

export default function UserAction({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    async function handleUser() {
      if (!user) {
        const session = await getSession();
        setUser(session?.user);
      }
    }
    handleUser();
  }, [user]);
  return (
    <div>
      {" "}
      <DropDownMenu
        menuClassName="bg-white min-w-72 "
        trigger={<Avatar size="lg" name={name || "UR"} />}
        type="normal"
      >
        <div className="flex flex-col gap-3 p-3 min-w-fit ">
          <div className="flex flex-col gap-2 font-normal text-sm justify-center items-center ">
            {user?.email}
          </div>
          <div className="flex gap-2 bg-blue-500/10 rounded p-2 min-w-fit items-center ">
            <Avatar
              size="md"
              name={user?.name[0].toLocaleUpperCase() || "UR"}
            />
            <div className="flex flex-col gap-0.5 text-blue-600 font-semibold">
              {user?.name}
              <div className="text-sm text-blue-600 font-normal pb-1 ">
                Individual
              </div>
            </div>
            <div className=" ml-auto">
              <Check className="w-4 h-4" />
            </div>
          </div>
          <div className="flex gap-2 font-normal  items-center border-t border-black/10 pt-2 hover:cursor-pointer hover:bg-blue-500/10 rounded p-2">
            {" "}
            <Settings /> Settings
          </div>
          <div
            onClick={() => {
              signOut();
              Cookies.remove("auth_token");
            }}
            className="flex gap-2 font-normal items-center hover:cursor-pointer hover:bg-red-500/10 rounded p-2"
          >
            {" "}
            <LogOut /> Logout
          </div>
        </div>
      </DropDownMenu>
    </div>
  );
}
