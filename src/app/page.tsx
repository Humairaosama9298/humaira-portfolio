import Image from "next/image";
import Hero_section from "./_components/hero-section";
import ContactPage from "./_components/contact"; 
import Services from "./services/page";
import Work from "./work/page";

export default function Home() {
  return (
    <main>
      <div>
          <Hero_section/>
          <Services/>
          <Work/>
          <ContactPage/>
      </div>
    </main>
  );
}
