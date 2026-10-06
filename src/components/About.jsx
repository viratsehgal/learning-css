import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mb-20 grid items-start gap-8 sm:grid-cols-[1fr_160px] md:mb-24 md:grid-cols-[2fr_1fr] md:gap-16"
    >
      <div className="max-w-[34em]">
        <SectionHeading id="about-heading">About</SectionHeading>
        <div className="space-y-6 text-fg-dim">
          <p>
            My name is Virat Sehgal. I am currently studying Computer Science and Engineering,
            learning new programming languages and frameworks.
          </p>
          <p>I spent almost a year as a Culinary student in Bengaluru.</p>
        </div>
      </div>
      <img
        src="/images/Virat.img.jpeg"
        alt="Virat Sehgal"
        width="240"
        height="288"
        className="block aspect-5/6 h-auto w-full max-w-[160px] rounded-lg object-cover transition-transform duration-300 hover:scale-[1.02] sm:max-w-[200px]"
      />
    </section>
  );
}
