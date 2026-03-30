export default function Clients() {
  return (
    <section className="px-4 container mx-auto py-24 border-y border-foreground/10" id="clients">
      <h2 className="text-4xl font-bold mb-12 text-center">Нам доверяют</h2>
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="text-2xl font-bold tracking-widest text-[#FFF]">
            LOGO {i}
          </div>
        ))}
      </div>
    </section>
  );
}
