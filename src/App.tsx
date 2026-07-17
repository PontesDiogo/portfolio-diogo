import { Header } from "./components/layout/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { Process } from "./sections/Process/Process";
import { FeaturedProjects } from "./sections/FeaturedProjects/FeaturedProjects";
import { OtherProjects } from "./sections/OtherProjects/OtherProjects";
import { About } from "./sections/About/About";

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
      </main>
    </>
  );
}

export default App;