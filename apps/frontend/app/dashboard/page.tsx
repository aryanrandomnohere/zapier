"use client";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import ZapTable from "../components/ZapDashboard/ZapTable";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import axios from "axios";
import { getSession } from "next-auth/react";
export default function Page() {
  const router = useRouter();
  async function handleCreateZap() {
    try {
      const session = await getSession();
      console.log(session?.user.userId);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/draft`,
        {
          userId: session?.user.userId,
        },
      );
      console.log(response);
      router.push(`/zap/create/${response.data.zapId}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="flex justify-end w-full  items-center h-full">
        <div className="flex justify-between items-center mt-12 mr-5 min-w-7/12">
          <div className="w-full text-lg">
            <ZapTable />
          </div>
        </div>
        <div className="self-start mr-10 mt-12 ">
          <SecondaryButton onClick={handleCreateZap} size="small">
            <div className="flex gap-1 items-center">
              <AiOutlinePlus className="text-white font-semibold" />
              Create
            </div>
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}
