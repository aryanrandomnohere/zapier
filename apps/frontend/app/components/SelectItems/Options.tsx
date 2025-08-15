"use client";
import useItems from "@/app/hooks/useItems";
import { topApps, products, extendedItems } from "./TempItems";
import { lazy } from "react";

const OptionList = lazy(() => import("./OptionList"));

export default function Options({
  type,
  onClose,
  index,
}: {
  type: "actions" | "triggers";
  onClose: () => void;
  index?: number;
}) {
  const { items } = useItems(type);
  const builtInItems = items.filter((item) => item.serviceType === "builtIn");
  const apps = items.filter((item) => item.serviceType !== "builtIn");

  const Items = [...builtInItems, ...extendedItems];
  const Apps = [...apps, ...topApps];
  return (
    <div className="flex h-full mt-5">
      <div className="w-1/2">
        <OptionList title="Your top apps" items={Apps} onClose={onClose} />
      </div>
      <div className="flex flex-col w-1/2">
        <div className="min-h-2/3">
          <OptionList
            title="Popular built-in tools (Working)"
            items={Items}
            onClose={onClose}
            index={index}
          />
        </div>
        <div>
          <OptionList
            title="New Zapier products"
            items={products}
            onClose={onClose}
            index={index}
          />
        </div>
      </div>
    </div>
  );
}
