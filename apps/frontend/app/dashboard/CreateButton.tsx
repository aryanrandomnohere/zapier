import React, { useEffect } from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import axios from "axios";
import { userAtom } from "../RecoilState/store/userAtom";
import { useRecoilState } from "recoil";
import { Plus } from "lucide-react";
export default function CreateButton() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    async function handleLoadSession() {
      const session = await getSession();
      setUser(session?.user);
    }
    if (!user) handleLoadSession();
  });
  async function handleCreateZap() {
    try {
      console.log(user);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/draft`,
        {
          userId: user?.userId,
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
          <Plus className="font-extrabold" size={18} />
          Create
        </div>
      </SecondaryButton>
    </div>
  );
}
