import React from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import axios from "axios";
export default function CreateButton() {
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
    <div className="self-start mr-10 mt-12 ">
      <SecondaryButton onClick={handleCreateZap} size="small">
        <div className="flex gap-1 items-center">
          <AiOutlinePlus className="text-white font-semibold" />
          Create
        </div>
      </SecondaryButton>
    </div>
  );
}
