import { useScrollReveal } from "./useScrollReveal";

const OrganizersSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-background py-16">
      <div
        className={`container text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div>
            <span className="uppercase tracking-widest text-xs text-foreground/50 block mb-2">Organizan</span>
            <span>Polo Científico Tecnológico · SAIA</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div>
            <span className="uppercase tracking-widest text-xs text-foreground/50 block mb-2">Coorganizan</span>
            <span>ENE · IFES Educación Superior</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div>
            <span className="uppercase tracking-widest text-xs text-foreground/50 block mb-2">Producen</span>
            <span>Marcos Galián · MMPRO Eventos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
