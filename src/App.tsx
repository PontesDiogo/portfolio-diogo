import { Header } from "./components/layout/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { Process } from "./sections/Process/Process";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Process />
      </main>
    </>
  );
}

export default App;