import Navbar from "../components/AppLayout/Navbar";
import Sidebar from "../ui/Sidebar";
import RecoilContextProvider from "../RecoilState/RecoilContextProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilContextProvider>
      {" "}
      {/* Single wrapper for all Recoil state */}
      <div className="flex flex-col h-full w-full">
        <Navbar />
        <div className="flex h-full w-full">
          <Sidebar />
          <div className="w-full min-h-full bg-[#F5F3EB]">{children}</div>
        </div>
      </div>
    </RecoilContextProvider>
  );
}
