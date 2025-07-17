import useItems from "@/app/hooks/useItems";
import OptionList from "./OptionList";
import { topApps, products, extendedItems } from "./TempItems";

export default function Options({
  type,
  onClose,
}: {
  type: "actions" | "triggers";
  onClose: () => void;
}) {
  const { items } = useItems(type);
  const builtInItems = items.filter((item) => item.serviceType != "app");
  const apps = items.filter((item) => item.serviceType === "app");

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
          />
        </div>
        <div>
          <OptionList
            title="New Zapier products"
            items={products}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
