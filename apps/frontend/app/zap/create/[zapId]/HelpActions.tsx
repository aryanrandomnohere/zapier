import DropDownMenu from "@/app/ui/DropDownMenu";
import { MdHelpOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { PiUserFocus } from "react-icons/pi";

export default function HelpActions({ trigger }: { trigger: React.ReactNode }) {
  return (
    <DropDownMenu trigger={trigger}>
      <ul className="text-white text-sm p-1 w-64 space-y-1.5">
        <li className="px-2 py-1 hover:bg-white/10 rounded-md flex items-center gap-2 cursor-pointer">
          <MdHelpOutline size={18} />
          Explore articles in Help Center
        </li>
        <li className="px-2 py-1 hover:bg-white/10 rounded-md flex items-center gap-2 cursor-pointer">
          <FiUsers size={18} />
          Ask the Zapier Community
        </li>
        <li className="px-2 py-1 hover:bg-white/10 rounded-md flex items-center gap-2 cursor-pointer">
          <LuGraduationCap size={18} />
          Take a Zapier Learn course
        </li>
        <li className="px-2 py-1 hover:bg-white/10 rounded-md flex items-center gap-2 cursor-pointer">
          <PiUserFocus size={18} />
          Hire a Zapier Expert
        </li>
      </ul>
    </DropDownMenu>
  );
}
