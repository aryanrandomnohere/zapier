import { AiOutlineAppstoreAdd } from "react-icons/ai";
import LinkButton from "./buttons/LinkButton";
import PrimaryButton from "./buttons/PrimaryButton";
import zap from "./zap.png";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../api/auth/[...nextauth]/auth";

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
          <LinkButton size="small">
            Products <SlArrowDown className="ml-1.5 text-xs" />
          </LinkButton>
          <LinkButton size="small">
            Solutions <SlArrowDown className="ml-1.5 text-xs" />
          </LinkButton>
          <LinkButton size="small">
            Resources <SlArrowDown className="ml-1.5 text-xs" />
          </LinkButton>
          <LinkButton size="small">Enterprise</LinkButton>
          <LinkButton size="small">Pricing</LinkButton>
        </div>
        <div className="flex items-center gap-4">
          <LinkButton href="https://zapier.com/apps" size="small">
            <AiOutlineAppstoreAdd className="text-xl mr-1" />
            Explore Apps
          </LinkButton>
          <LinkButton size="small">Contact sales</LinkButton>
          <Link className="flex items-center gap-4" href={"sign-up"}>
            {!isAuthenticated && <LinkButton size="small">Log in</LinkButton>}
            {!isAuthenticated && (
              <PrimaryButton size="small">Sign up</PrimaryButton>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
