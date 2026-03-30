export default function Team() {
  return (
    <section className="px-4 container mx-auto py-24" id="team">
      <h2 className="text-4xl font-bold mb-12">Команда</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl bg-foreground/5 border border-foreground/10 aspect-square flex items-end p-6">
            <div>
              <h3 className="text-x font-bold">Имя Фамилия</h3>
              <p className="text-foreground/70">Роль в команде</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
