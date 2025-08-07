import { AppIconProps } from "@repo/types";

export const AppIcon: React.FC<AppIconProps> = ({ imagePath, name }) => {
  if (!imagePath) {
    return <></>;
  }
  console.log(name);
  return (
    <div className="w-5 h-5 border p-[1px] border-gray-200 overflow-hidden">
      <img
        src={imagePath}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a colored circle with first letter if image fails
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.parentElement!.innerHTML = `
            <div class="w-full h-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-600">
              ${name.charAt(0).toUpperCase()}
            </div>
          `;
        }}
      />
    </div>
  );
};
