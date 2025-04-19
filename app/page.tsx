import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <div className="desktopContent">
        <Hero />
        <About />
        <Reviews />
        <Footer />
      </div>
      <div className="mobileMessage">
        <p>This content is not available on mobile.</p>
      </div>
    </div>
  );
}
