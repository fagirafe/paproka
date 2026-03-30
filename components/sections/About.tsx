export default function About() {
  return (
    <section className="px-4 container mx-auto py-24" id="about">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-8">О нас</h2>
        <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-foreground/20 shrink-0"></div>
          <div>
            <h3 className="text-2xl font-bold">Настя, основатель студии</h3>
            <div className="flex items-center gap-2 mt-2 text-foreground/70">
              <span>Ex Lead</span>
              <span className="w-6 h-6 rounded bg-[#FFCC00] flex items-center justify-center text-black font-bold text-xs">Y</span>
              <span>Yandex</span>
            </div>
            <p className="mt-4 text-foreground/80">
              Эксперты в B2B SaaS продуктах -- вникаем в ваш проект и повышаем метрики
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
