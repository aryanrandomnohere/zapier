"use client";
import ZapTable from "../components/ZapDashboard/ZapTable";
import CreateButton from "./CreateButton";
import RecoilProvider from "./RecoilProvider";
export default function Page() {
  return (
    <>
      <div className="flex justify-end w-full  items-center h-full">
        <div className="flex justify-between items-center mt-12 mr-5 min-w-7/12">
          <div className="w-full text-lg">
            <ZapTable />
          </div>
        </div>
        <RecoilProvider>
          <CreateButton />{" "}
        </RecoilProvider>
      </div>
    </>
  );
}
