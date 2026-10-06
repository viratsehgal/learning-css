export default function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="mb-6 font-hand text-[26px]/6 font-normal">
      {children}
    </h2>
  );
}
