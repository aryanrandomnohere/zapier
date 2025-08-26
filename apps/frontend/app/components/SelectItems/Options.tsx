"use client";
import useItems from "@/app/hooks/useItems";
import { topApps, products, extendedItems } from "./TempItems";
import dynamic from "next/dynamic";
const OptionList = dynamic(() => import("./OptionList"), { ssr: false });

export default function Options({
  type,
  onClose,
  index,
  insertingOrNew,
}: {
  type: "actions" | "triggers";
  onClose: () => void;
  index?: number;
  insertingOrNew?: "inserting" | "new" | "change";
}) {
  const { items } = useItems(type);
  const builtInItems = items.filter((item) => item.serviceType === "builtIn");
  const apps = items.filter((item) => item.serviceType !== "builtIn");

  const Items = [...builtInItems, ...extendedItems];
  const Apps = [...apps, ...topApps];

  return (
    <div className="flex flex-col sm:flex-row h-full mt-5 gap-4">
      {/* Top Apps */}
      <div className="w-full sm:w-1/2">
        <OptionList
          title="Your top apps"
          items={Apps}
          onClose={onClose}
          insertingOrNew={insertingOrNew}
        />
      </div>

      {/* Built-in Tools + New Products */}
      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <OptionList
          title="Popular built-in tools (Working)"
          items={Items}
          onClose={onClose}
          index={index}
          insertingOrNew={insertingOrNew}
        />
        {/* <OptionList
          title="New Zapier products"
          items={products}
          onClose={onClose}
          index={index}
          insertingOrNew={insertingOrNew}
        /> */}
      </div>
    </div>
  );
}
