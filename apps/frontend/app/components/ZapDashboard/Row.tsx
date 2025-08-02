import { itemStepMetaData, zapInterface } from "@repo/types";
import { IoIosArrowForward } from "react-icons/io";
import ToggleButton from "../buttons/ToggleButton";
import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import { getSession } from "next-auth/react";

export default function Row({
  zap,
  handleZapClick,
}: {
  zap: zapInterface;
  handleZapClick: (arg: string) => void;
}) {
  const [activeZap, setActiveZap] = useState<boolean>(zap.published);
  const [user, setUser] = useRecoilState(userAtom);
  async function handlePublishing() {
    let userId = user?.userId;
    if (!user) {
      const session = await getSession();
      setUser(session?.user);
      userId = session?.user.userId;
    }
    if (activeZap) {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/stop/${zap.id}`,
        {
          userId: userId,
        },
      );
      if (response.data.success) setActiveZap(false);
    } else {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/start/${zap.id}`,
        {
          userId: userId,
        },
      );
      if (response.data.success) setActiveZap(true);
    }
  }

  if (!zap.trigger || !zap.trigger) {
    return <></>;
  }
  return (
    <div
      className="flex w-6/6 justify-between  border-b border-black/20 pr-10 py-2 items-center gap-1"
      key={zap.id}
    >
      <div className="flex  w-fit gap-2 items-center">
        <input
          type="checkbox"
          defaultChecked
          className="min-w-5 min-h-5 rounded-md border-2 border-gray-400 bg-white checked:bg-blue-500 hover:cursor-pointer checked:border-blue-500 focus:ring-0 focus:ring-blue-300 transition duration-200"
        />
        <div>
          <img
            src={zap.trigger.type.imagePath}
            alt="trigger"
            className="w-8 h-8 border border-gray-400/50 rounded-md p-0.5"
          />
        </div>{" "}
        {zap.actions.map((action, i) => (
          <div key={action.id}>
            <img
              src={zap.actions[i].actionDetails.imagePath}
              alt="trigger"
              className="w-8 h-8 border border-gray-400/50 rounded-md p-0.5"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-1/6 text-sm">
        {zap.name || "Untitled Zap"}
      </div>
      <div className="flex justify-center w-1/6 items-center gap-7">
        {" "}
        <div className="text-sm min-w-24 w-1/3">
          {new Date(zap.lastEdited).toLocaleDateString() || "Nov 13, 2023"}
        </div>
        <div className="w-1/3">
          <ToggleButton
            isChecked={activeZap}
            setIsChecked={() => handlePublishing()}
          />
        </div>
        <div
          onClick={() => handleZapClick(zap.id)}
          className="w-1/3 mr-20 ml-5 hover:cursor-pointer"
        >
          <IoIosArrowForward size="20" />
        </div>
      </div>
    </div>
  );
}
