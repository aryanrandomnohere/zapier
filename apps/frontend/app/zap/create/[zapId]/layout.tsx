import RecoilContextProvider from "@/app/RecoilState/RecoilContextProvider";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <RecoilContextProvider>
        <div className="flex flex-col min-h-full">
          <TopBar />
          <div className="flex h-full">
            <LeftBar />
            <div className="w-full rounded-md min-h-full">{children}</div>
          </div>
        </div>
      </RecoilContextProvider>
    </div>
  );
}
