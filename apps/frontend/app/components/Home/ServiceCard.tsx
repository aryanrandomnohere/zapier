import Link from "next/link";

export const ServiceCard = ({
  icon,
  title,
  description,
  href,
  working,
}: {
  icon: any;
  title: string;
  description: string;
  href: string;
  working?: boolean;
}) => {
  return (
    <Link
      href={working ? href : "#"}
      className={`block ${!working ? "cursor-not-allowed" : ""}`}
    >
      <div
        className={`${
          working ? "bg-white" : "bg-gray-100"
        } rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200 group flex items-center space-x-3 w-full sm:w-[220px]`}
      >
        {/* Icon */}
        <div className="w-9 h-9 border p-1 rounded bg-yellow-200/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-tight">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
