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
    <div className="flex h-full mt-5">
      <div className="w-1/2">
        <OptionList
          title="Your top apps"
          items={Apps}
          onClose={onClose}
          insertingOrNew={insertingOrNew}
        />
      </div>
      <div className="flex flex-col w-1/2">
        <div className="min-h-2/3">
          <OptionList
            title="Popular built-in tools (Working)"
            items={Items}
            onClose={onClose}
            index={index}
            insertingOrNew={insertingOrNew}
          />
        </div>
        <div>
          <OptionList
            title="New Zapier products"
            items={products}
            onClose={onClose}
            index={index}
            insertingOrNew={insertingOrNew}
          />
        </div>
      </div>
    </div>
  );
}
