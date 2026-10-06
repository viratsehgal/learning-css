import { motion } from "motion/react";

/* Shared by the contact links and the Live / Post links: one soft highlight
   glides between the items of a group on a spring, the way a selection moves
   through a list on a Mac. */

export const spring = { type: "spring", stiffness: 500, damping: 40, mass: 0.8 };

// px-2 pads the highlight; callers pull the row back with negative margin so the text stays aligned
export const item =
  "relative flex items-center gap-1.5 rounded-md px-2 py-0.5 text-left whitespace-nowrap " +
  "text-fg-dim transition-colors duration-150 hover:text-fg focus-visible:text-fg";

// `id` must be unique per group, so highlights in different groups don't fly between them
export function Highlight({ id }) {
  return (
    <motion.span
      layoutId={id}
      className="absolute inset-0 -z-10 rounded-md bg-fg/[0.07]"
      transition={spring}
    />
  );
}

/* The ↗ on external links: slides in from the lower left as the row lights up. */
export function Arrow({ shown }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={false}
      animate={shown ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -3, y: 3 }}
      transition={spring}
    >
      &#8599;
    </motion.span>
  );
}

// pointer and keyboard both move the highlight
export function tracker(setActive) {
  return (key) => ({
    onMouseEnter: () => setActive(key),
    onFocus: () => setActive(key),
    onBlur: () => setActive(null),
  });
}
