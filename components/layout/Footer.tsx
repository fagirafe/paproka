export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tighter">PAPRIKA</span>
          <p className="text-sm text-foreground/60 mt-2">© {new Date().getFullYear()} Все права защищены</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-foreground/80 hover:text-foreground text-sm font-medium">Behance</a>
          <a href="#" className="text-foreground/80 hover:text-foreground text-sm font-medium">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
