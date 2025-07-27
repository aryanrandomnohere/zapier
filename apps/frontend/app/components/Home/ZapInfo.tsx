import RecoilProvider from "@/app/dashboard/RecoilProvider";
import ZapierIntroCard from "./ZapIntroCard";
import Unfinished from "./Unfinished";

export default function ZapInfo() {
  return (
    <div className="flex w-full justify-between gap-6">
      <ZapierIntroCard />
      <Unfinished />
    </div>
  );
}
