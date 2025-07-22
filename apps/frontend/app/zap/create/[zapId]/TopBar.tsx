import { IoIosArrowDown } from "react-icons/io";
import { IoApps, IoHomeOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import FolderPath from "./FolderPath";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className=" min-h-8   w-full bg-stone-800/95">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center w-full h-full gap-3 mx-2 max-w-24">
          <div className=" p-1.5 border rounded-sm border-black hover:bg-blue-200/70 hover:border-blue-200/70 hover:cursor-pointer">
            {" "}
            <IoHomeOutline size={16} color="white" />
          </div>
          <div className="px-1.5 py-3 hover:bg-white/20 hover:cursor-pointer ">
            <IoApps size={16} color="white" />
          </div>
          <Link
            href={"/dashboard"}
            className="flex gap-1 items-center py-2 px-2 hover:bg-white/20 hover:cursor-pointer"
          >
            <span className="" style={{ color: "#ff4f00" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="18"
                width="18"
              >
                <path
                  fill="currentColor"
                  d="M9 23.66 20.54 9.91H15V.16L3.46 13.91H9v9.75Z"
                />
              </svg>
            </span>

            <span className="font-extrabold text-white text-lg">Zaps</span>
          </Link>
        </div>

        <div>
          <FolderPath />
        </div>

        <div className="flex gap-3">
          <div className="flex items-center justify-center text-sm text-white gap-1 px-2 py-3  hover:bg-white/20 hover:cursor-pointer">
            <span className="flex font-bold">100%</span>
            <div className="text-white/50">
              <IoIosArrowDown size={16} />
            </div>
          </div>

          <div className="flex items-center justify-center text-sm text-white gap-1 py-3 px-2  hover:bg-white/20 hover:cursor-pointer">
            <RxQuestionMarkCircled size={16} />
            <span className="flex font-bold">Help</span>
            <div className="text-white/50">
              <IoIosArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
