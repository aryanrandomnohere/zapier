import DropDownMenu from "@/app/ui/DropDownMenu";

export default function ZapActions({ trigger }: { trigger: React.ReactNode }) {
  return (
    <DropDownMenu trigger={trigger}>
      <ul className="text-white text-sm p-1 space-y-1.5">
        <li className="px-2 py-0.5 hover:bg-zinc-700 cursor-pointer">Rename</li>
        <li className="px-2 py-0.5 hover:bg-zinc-700 cursor-pointer">
          Duplicate
        </li>
        <li className="px-2 py-0.5 text-zinc-500 cursor-not-allowed">
          Transfer data
        </li>
        <li className="px-2 py-0.5 hover:bg-zinc-700 cursor-pointer">
          Create template
        </li>
      </ul>
    </DropDownMenu>
  );
}
