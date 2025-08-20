"use client";
import DropDownMenu from "../ui/DropDownMenu";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../RecoilState/store/userAtom";
import { getSession, signOut } from "next-auth/react";
import { Check, LogOut, Settings } from "lucide-react";
import axios from "axios";

export default function UserAction({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    async function handleUser() {
      if (!user) {
        const session = await getSession();
        //@ts-ignore gemini
        setUser(session?.user);
      }
    }
    handleUser();
  }, [user]);

  const clearAllCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  };

  const handleSignOut = async () => {
    console.log("Logging out");
    // Clear all client-side cookies
    clearAllCookies();

    // Call backend logout endpoint
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/logout`,
      );
      console.log("Logout response", response);
      if (response.status === 200) {
        await signOut(); // NextAuth signOut
      } else {
        // toast.error("Logout failed"); // Assuming 'toast' is available, otherwise remove or define it
        console.error("Logout failed on backend");
      }
    } catch (error) {
      console.error("Error during backend logout:", error);
      // toast.error("Logout failed due to network error");
    }
  };

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
            onClick={handleSignOut}
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
