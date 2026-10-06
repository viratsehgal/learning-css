import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Arrow, Highlight, item, tracker } from "./HoverHighlight";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

// links inside the card handle their own click, so the card doesn't open a second tab
const stop = (e) => e.stopPropagation();

function Project({ title, href, description, links }) {
  const [active, setActive] = useState(null);
  const track = tracker(setActive);

  function open() {
    // don't hijack a drag-to-select of the description
    if (window.getSelection()?.toString()) return;
    window.open(href, "_blank", "noopener");
  }

  return (
    <article onClick={open} className="flex cursor-pointer flex-col items-start">
      {/* title and description light up together; the buttons below have their own hover */}
      <motion.div
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="group origin-left"
      >
        <h3 className="mb-1.5 flex items-center gap-1 font-semibold tracking-[-0.011em]">
          <a href={href} target="_blank" onClick={stop}>
            {title}
          </a>
          <ChevronRight
            aria-hidden="true"
            size={16}
            strokeWidth={2.25}
            className="-translate-x-1 text-fg-dim opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </h3>
        <p className="leading-[22px] text-pretty text-fg-dim transition-colors duration-200 group-hover:text-fg/75">
          {description}
        </p>
      </motion.div>

      <div className="isolate -ml-2 mt-2 flex" onMouseLeave={() => setActive(null)}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            onClick={stop}
            className={`${item} font-medium`}
            {...track(link.label)}
          >
            {active === link.label && <Highlight id={`links-${title}`} />}
            {link.label}
            <Arrow shown={active === link.label} />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section aria-labelledby="works-heading">
      <SectionHeading id="works-heading">Projects</SectionHeading>
      <div className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 md:grid-cols-3 md:gap-x-16">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
