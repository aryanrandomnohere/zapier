import ZapInfo from "../components/Home/ZapInfo";
import ServiceCards from "../components/Home/ServiceCards";

export default function Page() {
  return (
    <div className="w-full flex flex-col bg-[#F5F3EB]">
      {/* Top Section */}
      <div className="flex justify-center bg-white border-b border-black/10 py-8 sm:py-14 px-4">
        <div className="w-full max-w-3xl flex flex-col gap-3 items-center text-center">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            What would you like to automate?
          </h1>

          {/* Example Input Box */}
          <div className="flex w-full sm:w-3/4 items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-600 bg-transparent shadow-sm">
            <span className="text-lg">✨</span>
            <span className="flex-1 text-xs sm:text-sm">
              Example: When I add a reaction to a Slack message, create a card
              in Trello.
            </span>
            <button className="text-gray-500 hover:text-gray-700 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full flex flex-col gap-6 mt-6 sm:mt-10 items-center px-4">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
          Start from scratch
        </h2>
        <ServiceCards />
        <ZapInfo />
      </div>
    </div>
  );
}
