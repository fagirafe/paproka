export default function Process() {
  return (
    <section className="px-4 container mx-auto py-24" id="process">
      <div className="max-w-3xl mb-12">
        <h2 className="text-4xl font-bold mb-6">Процессы</h2>
        <p className="text-xl text-foreground/80">Дизайн и код — это полдела. Вторая половина — коммуникация и процессы</p>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="snap-start shrink-0 w-[300px] md:w-[400px] aspect-square rounded-2xl bg-foreground/5 border border-foreground/10 p-8 flex flex-col justify-between">
            <span className="text-6xl font-bold text-foreground/20">0{i}</span>
            <div>
              <h3 className="text-2xl font-bold mb-2">Этап {i}</h3>
              <p className="text-foreground/70">Описание этапа и его важности для проекта.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
