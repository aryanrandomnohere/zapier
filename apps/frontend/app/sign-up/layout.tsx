import Navbar from "../components/AppLayout/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
