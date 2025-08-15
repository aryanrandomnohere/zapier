"use client";
import React, { useState } from "react";
import { BsHouseDoor, BsStars } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GoZap } from "react-icons/go";
import { LiaToolsSolid } from "react-icons/lia";
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
      icon: <BsHouseDoor />,
    },
    {
      id: "apps",
      label: "Apps",
      icon: <AiOutlineAppstoreAdd />,
    },
    {
      id: "zapier-products",
      label: "Zapier products",
      icon: <GoZap />,
    },
    {
      id: "built-in-tools",
      label: "Built-in tools",
      icon: <LiaToolsSolid />,
    },
    {
      id: "ai",
      label: "AI",
      icon: <BsStars />,
    },
  ];

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId === selectedFilter ? null : filterId);
  };

  return (
    <div className="flex items-center gap-1 p-1 w-full">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => handleFilterClick(option.id)}
          className={`flex items-center gap-1.5 py-[3px] px-[4px] rounded transition-colors hover:cursor-pointer duration-200 border border-black/20 ${
            selectedFilter === option.id
              ? "bg-blue-300/20 text-blue-600 "
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center justify-center">
            {option.icon}
          </span>
          {option.label && (
            <span className="text-xs font-bold">{option.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterItems;
