import Navbar from "./components/AppLayout/Navbar";
import Hero from "./components/LandingPage/Hero";

export default function page() {
  console.log("page rendered");
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Hero />
      </div>
    </main>
  );
}
