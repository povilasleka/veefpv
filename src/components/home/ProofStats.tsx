const stats = [
  {
    number: "2ND",
    suffix: "/4",
    title: "Italy World Cup 2024 (Women)",
    desc: "46th of 63 overall — competing on the FAI world stage.",
  },
  {
    number: "3",
    suffix: " RIGS",
    title: "Cinewhoop to Cinelifter",
    desc: "Frame size matched to the shot — from tight interiors to open-air aerials.",
  },
  {
    number: "A1/A3",
    suffix: "",
    title: "Licensed & Insured",
    desc: "Cleared to fly over crowds and restricted spaces, responsibly.",
  },
];

export function ProofStats() {
  return (
    <div className="grid grid-cols-1 gap-14 px-4.5 py-20 md:grid-cols-3 md:px-10 md:py-32.5">
      <div className="col-span-full mb-2 flex items-baseline justify-between">
        <h2 className="text-display text-[clamp(30px,8vw,68px)] md:text-[clamp(40px,4.5vw,68px)]">
          Precision, Proven
        </h2>
      </div>
      {stats.map((s) => (
        <div key={s.title} className="border-t-[1.5px] border-white/85 pt-6.5">
          <div className="text-display text-accent text-[clamp(44px,14vw,72px)] leading-none md:text-[clamp(56px,6vw,92px)]">
            {s.number}
            <span className="text-[0.45em] align-baseline">{s.suffix}</span>
          </div>
          <div className="mt-3.5 text-[13px] font-bold tracking-wide uppercase">{s.title}</div>
          <div className="mt-2 text-[14px] leading-relaxed font-medium text-white/55">
            {s.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
