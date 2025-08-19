"use client";
import { CircleHelp, Users, GraduationCap, User } from "lucide-react";
import { lazy } from "react";
import DropDownMenu from "@/app/ui/DropDownMenu";
export default function HelpActions({ trigger }: { trigger: React.ReactNode }) {
  return (
    <DropDownMenu type="normal" trigger={trigger}>
      <ul className="text-white text-sm p-1 w-64 space-y-1.5 ">
        <li className="px-2 py-1rounded-md flex items-center gap-2 cursor-pointer hover:cursor-pointer hover:bg-blue-700">
          <CircleHelp size={18} />
          Explore articles in Help Center
        </li>
        <li className="px-2 py-1 rounded-md flex items-center gap-2 cursor-pointer hover:cursor-pointer hover:bg-blue-700">
          <Users size={18} />
          Ask the Zapier Community
        </li>
        <li className="px-2 py-1 rounded-md flex items-center gap-2 cursor-pointer hover:cursor-pointer hover:bg-blue-700">
          <GraduationCap size={18} />
          Take a Zapier Learn course
        </li>
        <li className="px-2 py-1 rounded-md flex items-center gap-2 cursor-pointer hover:cursor-pointer hover:bg-blue-700">
          <User size={18} />
          Hire a Zapier Expert
        </li>
      </ul>
    </DropDownMenu>
  );
}
