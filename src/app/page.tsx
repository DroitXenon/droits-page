import Hero from "@/sections/hero";
import About from "@/sections/about";
import SKills from "@/sections/skills";
import Contact from "@/sections/contact";
import Projects from "@/sections/project";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SKills />
      <Projects />
      <Contact />
    </>
  );
}