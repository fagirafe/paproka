export default function Cases() {
  return (
    <section className="px-4 container mx-auto py-24" id="cases">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl font-bold">Кейсы</h2>
        <a href="#" className="text-foreground/80 hover:text-foreground hover:underline underline-offset-4">Все проекты →</a>
      </div>
      <div className="flex flex-col gap-12">
        {[
          { id: 1, title: "Factory Director — автоматизация производства", tags: ["UX/UI", "Исследования", "SaaS"] },
          { id: 2, title: "Второй кейс -- Название", tags: ["UX/UI", "Исследования", "SaaS"] }
        ].map((caseItem) => (
          <div key={caseItem.id} className="group relative overflow-hidden rounded-2xl bg-foreground/5 border border-foreground/10 aspect-[16/9] md:aspect-[21/9] flex items-end p-8">
            <div className="w-full">
              <h3 className="text-3xl font-bold mb-4">{caseItem.title}</h3>
              <div className="flex items-center gap-4">
                {caseItem.tags.map((tag) => (
                  <span key={tag} className="border border-foreground/20 rounded-full px-4 py-1 text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
