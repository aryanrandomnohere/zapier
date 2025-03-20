"use client";

import { AiOutlineAppstoreAdd } from "react-icons/ai";
import LinkButton from "./buttons/LinkButton";
import PrimaryButton from "./buttons/PrimaryButton";
import zap from "./zap.png";
import { SlArrowDown } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check authentication after the component mounts
      const token = Boolean(window.localStorage.getItem("token"))
      setIsAuthenticated(token);
    }
  }, []);

  return (
    <div
      className="w-full border-b bg:stone-50 border-b-black/10 pl-8 pr-10"
      style={{ backgroundColor: "#FFFDF9" }}
    >
      <div className="flex w-full justify-between items-center my-1.5">
        <div className="flex gap-3 justify-center items-center">
          <img
            src={zap.src}
            onClick={() => {
              router.push("/");
            }}
            alt="LOGO"
            className="max-w-32 hover:cursor-pointer"
          />
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
          <LinkButton size="small">
            <AiOutlineAppstoreAdd className="text-xl mr-1" />
            Explore Apps
          </LinkButton>
          <LinkButton size="small">Contact sales</LinkButton>
          {!isAuthenticated && <LinkButton size="small">Log in</LinkButton>}
          {!isAuthenticated && (
            <PrimaryButton
              onClick={() => {
                router.push("/sign-up");
              }}
              size="small"
            >
              Sign up
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
}
