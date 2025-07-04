import ServiceCards from "../components/Services/ServiceCards";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-9">
      <div className="flex justify-center bg-stone-100 py-9">
        <div className=" w-full flex flex-col gap-5 mx-96 ">
          <div className="font-bold text-3xl">
            What would you like to automate?
          </div>
          <div className="flex items-center min-w-2/3 gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white shadow-sm">
            <span className="text-xl">✨</span>
            <span className="flex-1">
              Example: When I add a reaction to a Slack message, create a card
              in Trello.
            </span>
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
      <div className="w-full h-full flex flex-col gap-5 font-bold text-xl   mx-96">
        Start from scratch
        <div className="flex gap-2">
          <ServiceCards />
        </div>
      </div>
    </div>
  );
}
