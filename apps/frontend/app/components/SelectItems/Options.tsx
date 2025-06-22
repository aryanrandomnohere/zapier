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
  const Items = [...items, ...extendedItems];
  return (
    <div className="flex h-full mt-5">
      <div className="w-1/2">
        <OptionList title="Your top apps" items={topApps} onClose={onClose} />
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
