import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import Navbar from "~/components/Navbar";
import { Testimonials } from "~/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen  min-h-screen text-neutral-200 ">
        <main>
          <HeroSection />
          <Testimonials />
        </main>
      </div>
      <Footer />
    </>
  );
}
