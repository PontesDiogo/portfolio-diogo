import { Header } from "./components/layout/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { Process } from "./sections/Process/Process";
import { FeaturedProjects } from "./sections/FeaturedProjects/FeaturedProjects";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Process />
        <FeaturedProjects />
      </main>
    </>
  );
}

export default App;