"use client";
import { itemTestMetaData } from "@repo/types";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { zapCreateState } from "../../RecoilState/store/zapCreate";
import { configureStepDetails } from "../../RecoilState/currentZap";
import { useParams } from "next/navigation";
import { getSession } from "next-auth/react";
import { InlineLoading, LoadingSpinner } from "../ui/LoadingSpinner";
import { Skeleton } from "../ui/Skeleton";
import { userAtom } from "@/app/RecoilState/store/userAtom";

export default function Task({
  item,
  imagePath,
  id,
}: {
  item: itemTestMetaData;
  imagePath: string;
  id: string;
}) {
  const [fetchedUrl, setFetchedUrl] = useState<string>("");
  const [isPressed, setIsPressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { zapId } = useParams();
  const [user, setUser] = useRecoilState(userAtom);
  const zap = useRecoilValue(zapCreateState);
  const optionId = useRecoilValue(configureStepDetails);

  useEffect(() => {
    async function handleFetch() {
      setLoading(true);
      try {
        let userId: string | undefined = user?.userId
          ? String(user.userId)
          : undefined;
        if (!user) {
          const session = await getSession();
          setUser(
            session?.user
              ? {
                  ...session.user,
                  name: session.user.name || "",
                  email: session.user.email || "",
                  image: session.user.image || "",
                  userId: String(session.user.userId),
                }
              : undefined,
          );
          userId = session?.user.userId
            ? String(session.user.userId)
            : undefined;
        }
        if (!userId) {
          console.log("Session does not exists returning");
          return;
        }
        if (id === "webhook")
          setFetchedUrl(`${process.env.NEXT_PUBLIC_HOOK_URL}/hooks/catch/${userId}/${zapId}`);
        else if (id === "email")
          setFetchedUrl(
            zap.selectedItems[0].metadata.optionConfiguration[optionId]
              .configurationStep?.fields[0].fieldValue || "",
          );
      } catch (error) {
        console.error("Error fetching URL:", error);
      } finally {
        setLoading(false);
      }
    }
    handleFetch();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      fetchedUrl || "https://hooks.zapier.com/hooks/c...",
    );
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <div className="m-2.5 border transform transition-all duration-300 ease-in-out bg-sky-500/5 border-gray-200 rounded p-3 hover:shadow-md hover:scale-105">
      {/* Header */}
      <div className="mb-2">
        <h3 className="text-xs font-bold text-gray-900 transform transition-all duration-300 ease-in-out">
          {item.task?.title}
        </h3>
        <p className="text-xs text-gray-600 transform transition-all duration-300 ease-in-out">
          {item.task?.subtitle}
        </p>
      </div>

      {/* URL Input with Copy Button */}
      <div className="mb-2 bg-yellow-400/50 border border-black/35 transform transition-all duration-300 ease-in-out">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded">
          <div className="flex items-center pl-1.5 pr-2">
            <img
              src={imagePath}
              alt="logo"
              className="w-6 h-6 bg-white p-[3px] border border-black/20 rounded transform transition-all duration-300 ease-in-out hover:scale-110"
            />
          </div>
          {loading ? (
            <div className="flex-1 py-2 px-1">
              <Skeleton width="w-full" height="h-4" />
            </div>
          ) : (
            <input
              type="text"
              value={fetchedUrl}
              readOnly
              className="flex-1 bg-transparent border-0 text-xs text-gray-700 py-2 px-1 focus:outline-none focus:ring-0 transform transition-all duration-300 ease-in-out"
            />
          )}
          <button
            onClick={handleCopy}
            disabled={loading}
            className={`px-2 py-1 mr-1.5 text-xs font-medium hover:cursor-pointer bg-blue-400/50 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transform transition-all duration-300 ease-in-out hover:scale-105 ${
              isPressed ? "scale-105" : "scale-100"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? <LoadingSpinner size="sm" color="primary" /> : "Copy"}
          </button>
        </div>
      </div>
      <div
        className={`flex justify-between ${isOpen ? "flex-col" : ""} transform transition-all duration-300 ease-in-out`}
      >
        {/* Description */}
        <div className="text-xs text-gray-600 transform transition-all duration-300 ease-in-out">
          <p className="">
            {isOpen
              ? item.task?.description
              : item.task?.description.slice(0, 36) + "..."}
          </p>
          {isOpen && (
            <a
              href={item.task?.learnMoreUrl}
              className="text-blue-600 hover:text-blue-700 underline transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              {item.task?.learnMoreText}
            </a>
          )}
        </div>

        {/* Show Less Link */}
        <div className="flex hover:cursor-pointer justify-end">
          <button
            className="text-xs text-blue-600 hover:text-blue-700 font-medium transform transition-all duration-300 ease-in-out hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "less" : "more"}
          </button>
        </div>
      </div>
    </div>
  );
}
