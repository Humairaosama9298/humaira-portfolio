
import HeroSection from "../components/hero-section";
import Services from "./services/page";
import ContactPage from "./contact/page";
import Project from "./project/page";

export default function Home() {
  return (
    <main>
      <div>
          <HeroSection/>
          <Services/>
          <Project/>
          <ContactPage/>
      </div>
    </main>
  );
}
