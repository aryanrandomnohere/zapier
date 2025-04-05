import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function page() {
  return (
    <main>
          <Navbar />
      <div className="flex">
        <Hero />
      </div>
    </main>
  );
}
