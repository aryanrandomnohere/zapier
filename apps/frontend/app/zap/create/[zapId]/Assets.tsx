import Sidebar from "@/app/ui/SidebarProps";

export default function Assets({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Sidebar trigger={trigger} position="left" width="w-64">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Linked assets</h2>
        <button className="w-full mb-2 bg-orange-500 text-white p-2 rounded">
          Create Table
        </button>
        <button className="w-full bg-orange-500 text-white p-2 rounded">
          Create Interface
        </button>
      </div>
    </Sidebar>
  );
}
