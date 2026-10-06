import { MotionConfig } from "motion/react";
import ContactLinks from "./components/ContactLinks";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto max-w-[1216px] px-8 pt-16 pb-16 md:px-16 md:pt-28 md:pb-20">
        <header className="mb-20 grid gap-8 md:mb-24 md:grid-cols-[2fr_1fr] md:gap-16">
          <h1 className="self-start font-hand text-[clamp(34px,5vw,52px)]/[1.06] font-normal tracking-[0.005em]">
            Hello, I&rsquo;m Virat
          </h1>
          <ContactLinks />
        </header>

        <About />
        <Projects />

        <footer className="mt-20 flex justify-between gap-8 text-fg-faint md:mt-24">
          <span className="font-medium">Virat Sehgal</span>
          <span>2026</span>
        </footer>
      </div>
    </MotionConfig>
  );
}
