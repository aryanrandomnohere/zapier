"use client";
import ZapierIntroCard from "./ZapIntroCard";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useEffect } from "react";
import Unfinished from "./Unfinished";

export default function ZapInfo() {
  useEffect(() => {
    const setCookieInCase = async () => {
      console.log("Setting cookie in case");
      const session = await getSession();
      console.log("Session", session);
      if (!session?.user.backendToken) {
        console.log("No token found");
        return;
      }
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/set-cookie`,
        {
          token: session.user.backendToken,
        },
        {
          withCredentials: true,
        },
      );
    };
    setCookieInCase();
  }, []);

  return (
    <div className="flex flex-col w-full md:justify-center gap-6 md:flex-row">
      {/* On mobile: stacked column 
          On md+ screens: side by side row */}
      <ZapierIntroCard />
      <RecoilContextProvider>
        <Unfinished />
      </RecoilContextProvider>
    </div>
  );
}
