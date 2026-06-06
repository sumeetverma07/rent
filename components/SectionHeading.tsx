type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-mint">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-ink dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">{text}</p>
    </div>
  );
}
