import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { Process } from "./sections/Process/Process";
import { FeaturedProjects } from "./sections/FeaturedProjects/FeaturedProjects";
import { OtherProjects } from "./sections/OtherProjects/OtherProjects";
import { About } from "./sections/About/About";
import { Technologies } from "./sections/Technologies/Technologies";
import { Contact } from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Process />
        <FeaturedProjects />
        <OtherProjects />
        <About />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;