import Navbar from "../components/AppLayout/Navbar";
import Sidebar from "../ui/Sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full"> {/* This sets the entire page as a column flex container */}
     <Navbar />
     <div className="flex h-full w-full"> {/* This div should contain the sidebar and main content */}
      <Sidebar />
      {children}
    </div>
    </div>
  );
}
