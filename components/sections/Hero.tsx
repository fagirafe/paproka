export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 container mx-auto" id="hero">
      <h1 className="text-5xl md:text-7xl font-bold max-w-4xl tracking-tight leading-tight mb-8">
        Мы встраиваемся в команду клиента как in-house дизайнеры и помогаем B2B SaaS-продуктам решать задачи роста
      </h1>
      <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-12">
        от улучшения UX и редизайна до повышения конверсии и качества пользовательского опыта.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-8 py-4 bg-foreground text-background text-lg font-medium rounded-md hover:bg-foreground/90 transition-colors">
          Обсудить проект
        </button>
      </div>
    </section>
  );
}
