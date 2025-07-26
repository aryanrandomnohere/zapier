import { ReactNode } from "react";

export default function LinkButton({
  children,
  size = "small",
  onClick,
  href
}: {
  children: ReactNode;
  size: string;
  onClick?: () => void;
  href?:string;
}) {
  return (
    <a
      href={href || ""}
      className=" flex lg: items-center rounded hover:bg-stone-200/50 text-sm p-2 transform transition-all duration-100 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
