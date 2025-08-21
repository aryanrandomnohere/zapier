"use client";
import ZapierIntroCard from "./ZapIntroCard";
import RecoilContextProvider from "@/RecoilState/RecoilContextProvider";
import dynamic from "next/dynamic";

const Unfinished = dynamic(() => import("./Unfinished"), { ssr: false });

export default function ZapInfo() {
  // useEffect(() => {
  //   const setCookieInCase = async () => {
  //     console.log("Setting cookie in case");
  //     const session = await getSession();
  //     console.log("Session", session);
  //     if (!session?.user.backendToken) {
  //       console.log("No token found");
  //       return;
  //     }
  //     await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/set-cookie`,
  //       {
  //         token: session.user.backendToken,
  //       },
  //       {
  //         withCredentials: true,
  //       },
  //     );
  //   };
  //   setCookieInCase();
  // }, []);
  return (
    <div className="flex w-full justify-between gap-6">
      <ZapierIntroCard />
      <RecoilContextProvider>
        <Unfinished />
      </RecoilContextProvider>
    </div>
  );
}
