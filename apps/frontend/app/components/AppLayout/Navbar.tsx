import { AppWindow } from "lucide-react";
import LinkButton from "../buttons/LinkButton";
import PrimaryButton from "../buttons/PrimaryButton";
import zap from "./zap.png";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../api/auth/[...nextauth]/auth";
import UserAction from "../UserAction";
import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";

export default async function Navbar() {
  const session = await auth();
  const isAuthenticated = !!session;
  return (
    <div
      className="w-full border-b bg-stone-50 border-b-black/10 pl-8 pr-10"
      style={{ backgroundColor: "#FFFDF9" }}
    >
      <div className="flex w-full justify-between items-center my-1.5">
        <div className="flex gap-3 justify-center items-center">
          <Link href={"/"}>
            {" "}
            <Image
              width={100}
              height={100}
              src={zap.src}
              alt="LOGO"
              className="max-w-32 hover:cursor-pointer"
            />
          </Link>
          {/* <LinkButton size="small">
            Products{" "}
            <div className="ml-1.5 text-xs">
              <ArrowDown />
            </div>
          </LinkButton>
          <LinkButton size="small">
            Solutions{" "}
            <div className="ml-1.5 text-xs">
              {" "}
              <ArrowDown />{" "}
            </div>
          </LinkButton>
          <LinkButton size="small">
            Resources{" "}
            <div className="ml-1.5 text-xs">
              {" "}
              <ArrowDown />{" "}
            </div>
          </LinkButton>
          <LinkButton size="small">Enterprise</LinkButton>
          <LinkButton size="small">Pricing</LinkButton> */}
        </div>
        <div className="flex items-center gap-4">
          <LinkButton href="" size="small">
            <div className="text-xl mr-1">
              {" "}
              {/* @ts-ignore */}
              <AppWindow />
            </div>
            Explore Apps
          </LinkButton>
          {/* @ts-ignore */}
          <LinkButton size="small">Contact sales</LinkButton>
          {!isAuthenticated && (
            <LinkButton href={"/sign-up"} size="small">
              Log in
            </LinkButton>
          )}
          <LinkButton href={"/sign-up"} size="small">
            {/* @ts-ignore */}
            {!isAuthenticated && (
              <PrimaryButton size="small">Sign up</PrimaryButton>
            )}
          </LinkButton>

          {isAuthenticated && (
            <RecoilContextProvider>
              <UserAction
                // @ts-ignore
                name={session?.user?.name[0].toLocaleUpperCase() || "UR"}
              />
            </RecoilContextProvider>
          )}
        </div>
      </div>
    </div>
  );
}
