import React, { useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { FaBolt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BiSolidBot } from "react-icons/bi";

interface FilterOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const FilterItems: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterOptions: FilterOption[] = [
    {
      id: "home",
      label: "",
      icon: <BsHouseDoor className="text-lg" />,
    },
    {
      id: "apps",
      label: "Apps",
      icon: <BsGrid className="text-lg" />,
    },
    {
      id: "zapier-products",
      label: "Zapier products",
      icon: <FaBolt className="text-lg" />,
    },
    {
      id: "built-in-tools",
      label: "Built-in tools",
      icon: <FaTools className="text-lg" />,
    },
    {
      id: "ai",
      label: "AI",
      icon: <BiSolidBot className="text-lg" />,
    },
  ];

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId === selectedFilter ? null : filterId);
  };

  return (
    <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg border border-gray-200 w-fit">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => handleFilterClick(option.id)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors duration-200 ${
            selectedFilter === option.id
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center justify-center">{option.icon}</span>
          {option.label && <span className="text-sm font-medium">{option.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default FilterItems;