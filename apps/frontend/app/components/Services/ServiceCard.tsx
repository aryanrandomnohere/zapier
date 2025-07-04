import Link from "next/link";

export const ServiceCard = ({
  icon,
  title,
  description,
  href,
}: {
  icon: React.JSX.Element;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded shadow-md p-4 hover:shadow-md transition-all duration-200 hover:border-gray-300 cursor-pointer group flex items-center space-x-3 min-w-[180px] max-w-fit">
        <div className="w-9 h-9 border p-1 rounded bg-yellow-200/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-xs  leading-tight">{description}</p>
        </div>
      </div>
    </Link>
  );
};
