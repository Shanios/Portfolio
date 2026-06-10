import { BackgroundFx } from "./components/portfolio/BackgroundFx";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Projects } from "./components/portfolio/Projects";
import { Timeline } from "./components/portfolio/Timeline";
import { Contact } from "./components/portfolio/Contact";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <BackgroundFx />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
