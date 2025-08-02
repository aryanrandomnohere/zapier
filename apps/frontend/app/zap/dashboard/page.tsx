import ZapTable from "../../components/ZapDashboard/ZapTable";
import Button from "./Button";
export default function Page() {
  return (
    <>
      <div className="flex justify-end w-full  items-start h-full">
        <div className="flex mt-12 mr-5 min-w-7/12">
          <div className="w-full text-lg">
            <ZapTable />
          </div>
        </div>
        <Button />
      </div>
    </>
  );
}
