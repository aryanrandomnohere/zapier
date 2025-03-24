import { BiSolidZap } from "react-icons/bi";
export default function ZapCell({
  title,
  subtitle,
  order,
}: {
  title: string;
  subtitle: string;
  order: number;
}) {
  return (
    <div className="flex flex-col gap-0 zap-cell">
      <div 
      className=" flex bg-white hover:cursor-pointer pr-10 pl-2 transition-all transform duration-200 hover:shadow-xl min-w-[20rem] py-2  border-black rounded-xl focus-within:border-blue-600"
      style={{ borderStyle: "dotted", borderWidth: "2px", borderSpacing: "11px" }}
      tabIndex={0}
      >
      
        <div className=" flex flex-col pl-2 gap-1.5">
        <div className="flex justify-between gap-2 items-center px-1.5 py-[1px] w-fit border border-black/20 bg-stone-200 rounded-md">
          <BiSolidZap className="text-white p-0.5 bg-black  rounded-full" />
          <div className="font-bold text-sm"> {title}</div>{" "}
        </div>
        
          <div className="flex gap-1 font-bold text-xl">
           
            <div className="flex gap-1 items-center">
             <div className="text-base"> {order}. </div>
              <div className=" font-semibold  text-stone-500 text-sm">{" "+ subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
