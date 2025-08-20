export default function Avatar({
  size,
  name,
}: {
  size: "sm" | "md" | "lg";
  name: string;
}) {
  return (
    <div
      className={`${size === "sm" ? "w-6 h-6" : size === "md" ? "w-9 h-9" : "w-10 h-10"} bg-[#AEE0FC] rounded-full hover:cursor-pointer flex items-center justify-center`}
    >
      <span
        className={`text-black ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"} font-semibold`}
      >
        {name}
      </span>
    </div>
  );
}
