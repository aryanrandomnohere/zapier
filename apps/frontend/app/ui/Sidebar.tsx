"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Assuming App Router
import { BoltIcon } from "../components/ZapDashboard/FolderIcon";
import { useRecoilState } from "recoil";
import { sidebarIsOpenAtom } from "../RecoilState/store/sidebarAtom";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarIsOpenAtom);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close dropdown if clicking inside a modal
      console.log("handleClickOutside");
      const target = event.target as HTMLElement;
      if (target && target.closest("[data-modal-backdrop]")) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isActive = (href: string) => pathname === href;
  return (
    <div
      ref={ref}
      // Main Sidebar Container: Fixed height, controls its own width based on isOpen
      // This div itself is fixed and takes full height of its parent (which is the viewport in Layout.tsx)
      className={`fixed h-full bg-[#FFFDF9]  z-50 ${
        isOpen ? "w-64" : "hidden md:block md:w-12"
      }`}
    >
      <div
        // Inner container for flex column layout of sidebar content
        // This div is now truly 'h-full' without extra padding at the bottom,
        // relying on flex-grow and mt-auto for proper distribution
        className="flex flex-col h-full pb-12"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        {/* Create Button */}
        <div className={`flex  py-3 px-2 w-full `}>
          <div
            className={`bg-orange-500 hover:bg-orange-600 text-white rounded ${
              isOpen
                ? "w-full p-1 text-base font-medium"
                : "w-8 h-8 flex items-center justify-center"
            }`}
          >
            {isOpen ? (
              <Link
                href="/zap/create"
                className="flex min-w-full items-center justify-center gap-6"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14m-7-7h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Create
              </Link>
            ) : (
              <Link
                href="/create"
                className="flex items-center justify-center w-full h-full"
              >
                {/* Ensure the icon size is explicitly controlled for collapsed state */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14m-7-7h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        {/* Crucial: flex-grow makes this section take all available space, overflow-y-auto handles scrolling */}
        <nav
          className={`flex flex-col w-full ${isOpen ? "px-4" : "px-2.5"}   overflow-y-auto custom-scrollbar`}
        >
          {/* Home & Discover */}
          <div className="mb-4 space-y-2.5">
            <Link
              href="/home"
              // Removed redundant ${isOpen ? "px-2.5": ""} here, p-1 and gap-3 define spacing
              className={`flex items-center gap-3 p-1 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              } ${isActive("/app/home") ? "bg-gray-100" : ""}`}
            >
              {/* Set consistent icon size here */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="m12 5.16 11 6.34V9.2l-2-1.16V5h-2v1.89l-7-4.04L1 9.2v2.3l2-1.15V21h18v-8.33l-2-1.16V19H5V9.2l7-4.04Z"
                />
              </svg>
              {isOpen && <span className="text-sm">Home</span>}
            </Link>

            <Link
              href=""
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-pointer text-gray-700 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              } ${isActive("/app/templates") ? "bg-gray-100" : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M12 2C7.53 2 3.74 4.95 2.46 9h2.13a8.058 8.058 0 0 1 4.54-4.46L6.78 11H2.05C1.46 16.89 6.1 22 12 22c5.51 0 10-4.49 10-10S17.51 2 12 2Zm-.56 2.03c.57-.04.57-.04 1.09 0L15.07 11H8.9l2.54-6.97ZM4.07 13h2.71l2.35 6.46c-2.7-1.05-4.69-3.5-5.06-6.46Zm7.37 6.97L8.9 13h6.17l-2.54 6.97c-.51.04-.52.04-1.09 0Zm3.41-.5L17.2 13h2.73c-.37 2.97-2.38 5.43-5.08 6.47ZM17.2 11l-2.35-6.47A8.007 8.007 0 0 1 19.93 11H17.2Z"
                />
              </svg>
              {isOpen && (
                <span className="text-sm cursor-not-allowed">Discover</span>
              )}
            </Link>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-4" />

          {/* Main Tools */}
          <div className="mb-4 space-y-2.5">
            <Link
              href="/zap/dashboard"
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-pointer text-gray-700 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              } ${isActive("/zap/dashboard") ? "bg-gray-100" : ""}`}
            >
              {!isOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fill="#2D2E2E"
                    d="M9 23.66 20.54 9.91H15V.16L3.46 13.91H9v9.75Z"
                  />
                </svg>
              ) : (
                <BoltIcon />
              )}
              {isOpen && <span className="text-sm font-medium">Zaps</span>}
            </Link>

            <Link
              href="" // Assuming no specific page for Tables, Interfaces, Chatbots, Canvas yet
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 min-w-full p-1 text-gray-300 cursor-not-allowed hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M12 2.998h9.002v4.501H12V2.998ZM12 7.499H2.998V12H12V7.5ZM12 12h9.002v4.501H12v-4.5ZM2.998 16.501H12v4.501H2.998v-4.5Z"
                />
              </svg>
              {isOpen && <span className="text-sm">Tables</span>}
            </Link>

            <Link
              href=""
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M7.5 7.5v9h9V21H3V3h18v13.5h-4.5v-9h-9Z"
                />
              </svg>
              {isOpen && <span className="text-sm">Interfaces</span>}
            </Link>

            <Link
              href=""
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M7 2H2v5h5V2ZM22 12H2v5h20v-5ZM22 12H7V7h5V2h10v10ZM7 22v-5h5l-5 5Z"
                />
              </svg>
              {isOpen && (
                <div className="flex items-center gap-6">
                  <span className="text-sm">Chatbots</span>
                  {/* CORRECTED: Removed conditional px-2.5 */}
                  <span className="bg-purple-100 text-purple-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Beta
                  </span>
                </div>
              )}
            </Link>

            <Link
              href=""
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path fill="#2D2E2E" d="M21 3H3v4.5h13.5V21H21V3Z" />
                <path
                  fill="#2D2E2E"
                  d="M14.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM9.75 16.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
              {isOpen && (
                <div className="flex items-center gap-6">
                  <span className="text-sm">Canvas</span>
                  {/* CORRECTED: Removed conditional px-2.5 */}
                  <span className="bg-purple-100 text-purple-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Beta
                  </span>
                </div>
              )}
            </Link>

            <Link
              href="" // Path to simulate active state for Agents
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              } ${isActive("/app/assets/agents") ? "bg-gray-100" : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <g fill="#2D2E2E" clipPath="url(#navCentral_svg__a)">
                  <path d="M3 3h4.5v4.5H3zM16.5 3H21v4.5h-4.5zM16.5 16.5H21V21h-4.5zM3 16.5h4.5V21H3zM7.5 7.5h9v9h-9z" />
                </g>
                <defs>
                  <clipPath id="navCentral_svg__a">
                    <path fill="#fff" d="M3 3h18v18H3z" />
                  </clipPath>
                </defs>
              </svg>
              {isOpen && (
                <div className="flex items-center gap-6">
                  <span className="text-sm">Agents</span>
                  {/* CORRECTED: Removed conditional px-2.5 */}
                  <span className="bg-purple-100 text-purple-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Beta
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path fill="#2D2E2E" d="M5 3H3v18h18v-2H5V3Z" />
                    <path
                      fill="#2D2E2E"
                      d="m12 3-2 2h7.59l-8.3 8.29 1.42 1.42L19 6.41V14l2-2V3h-9Z"
                    />
                  </svg>
                </div>
              )}
            </Link>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-4" />

          {/* Secondary Tools */}
          <div className="mb-4 space-y-2.5">
            <Link
              href=""
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              } ${isActive("/app/assets/connections") ? "bg-gray-100" : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M3 11h8V3H3v8Zm2-6h4v4H5V5ZM3 21h8v-8H3v8Zm2-6h4v4H5v-4ZM13 21h8v-8h-8v8Zm2-6h4v4h-4v-4ZM18 6V3h-2v3h-3v2h3v3h2V8h3V6h-3Z"
                />
              </svg>
              {isOpen && <span className="text-sm">App Connections</span>}
            </Link>

            <Link
              href=""
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              } ${isActive("/app/history") ? "bg-gray-100" : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-8.47-3.22 2.7 1.29 1.54 3.93-3.3V7h-2v4.53Z"
                />
              </svg>
              {isOpen && <span className="text-sm">Zap History</span>}
            </Link>

            <button
              // Removed redundant ${isOpen ? "px-2.5": ""} here
              className={`flex items-center gap-3 p-1 cursor-not-allowed text-gray-300 hover:bg-gray-100 rounded w-full transition-colors duration-150 ${
                isOpen ? "" : "justify-center"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#2D2E2E"
                  d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM5 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM19 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                />
              </svg>
              {isOpen && <span className="text-sm">More</span>}
            </button>
          </div>
        </nav>

        {/* Bottom Section */}
        {/* mt-auto pushes this to the bottom, ensuring it's always visible */}
        {isOpen && (
          <div className="w-full px-4 py-4  border-t border-gray-200 mt-auto">
            <div className="mb-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Plan tasks</span>
                <span className="text-xs text-gray-600">2 / 1,000</span>
              </div>
            </div>
            <div className="text-xs text-gray-600 mb-1">
              Zaps Pro trial ends Jul 31
            </div>
            <Link href="" className="text-xs text-blue-600 hover:underline">
              Manage plan
            </Link>
          </div>
        )}
      </div>
      {/* Custom Scrollbar Style */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e0; /* gray-300 */
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #a0aec0; /* gray-400 */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
