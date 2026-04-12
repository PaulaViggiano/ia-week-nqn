import { useEffect, useState } from "react";

const CTA_URL = "https://tktevent.com/pass/event/form/157";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="font-heading font-bold text-lg text-foreground">
          IA WEEK <span className="text-primary">NQN</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#informacion" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors">
            Información 
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta font-heading font-bold text-sm px-5 py-2 rounded-full text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Inscribirme
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
