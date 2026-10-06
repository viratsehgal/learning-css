import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Arrow, Highlight, item, tracker } from "./HoverHighlight";

const EMAIL = "viratsehgal.work@gmail.com";

const socials = [
  { label: "X (Twitter)", href: "https://x.com/ViratSehgal__" },
  { label: "Instagram", href: "https://www.instagram.com/viratsehgall/" },
  { label: "GitHub", href: "https://github.com/viratsehgal" },
];

export default function ContactLinks() {
  const [active, setActive] = useState(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    });
  }

  const track = tracker(setActive);

  return (
    <nav aria-label="Elsewhere">
      <span className="mb-3 block size-[11px] rounded-full bg-accent" aria-hidden="true" />
      <div
        className="isolate flex flex-col items-start"
        onMouseLeave={() => setActive(null)}
      >
        <button
          type="button"
          onClick={copyEmail}
          className={`${item} -mx-2 cursor-pointer`}
          {...track("email")}
        >
          {active === "email" && <Highlight id="contact-highlight" />}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={copied ? "copied" : "email"}
              initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {copied ? "Copied" : "E-mail"}
            </motion.span>
          </AnimatePresence>
        </button>

        {socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" className={`${item} -mx-2`} {...track(label)}>
            {active === label && <Highlight id="contact-highlight" />}
            {label}
            <Arrow shown={active === label} />
          </a>
        ))}
      </div>
    </nav>
  );
}
