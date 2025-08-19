import React from "react";

export default function ZapierIntroCard() {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm max-h-80 rounded shadow-md bg-[#FDFCFB] p-4 space-y-4">
      {/* Top image */}
      <img
        src="https://res.cloudinary.com/zapier-media/image/upload/v1749682014/AutomationInsights_Home_GetStartedCard.png"
        alt="Get started with Zapier"
        className="w-full rounded-lg max-w-80"
      />

      {/* Text Content */}
      <div>
        <h2 className="text-sm font-semibold text-gray-800">
          Get started with Zapier
        </h2>
        <p className="text-xs text-gray-600 mt-2">
          We&apos;ll help you adopt an automation mindset and guide you through
          the necessary steps to get things up and running.
        </p>
      </div>

      {/* Button */}
      <button className="px-2 py-1 self-start rounded border border-gray-300 text-xs font-medium hover:bg-gray-50 transition">
        Get started
      </button>
    </div>
  );
}
