import patagoniaLogo from "@/assets/patagoniaLogo.png";

const Footer = () => (
  <footer className="bg-background border-t border-border py-8">
    <div className="container text-center space-y-3">
      <div className="flex items-center justify-center gap-3">
        <img src={patagoniaLogo} alt="PatagonIA Solutions" className="h-8" />
      </div>
      <p className="text-xs text-muted-foreground">
        Landing desarrollada por{" "}
        <a
          href="https://patagoniasolutions.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          PatagonIA Solutions
        </a>
      </p>
      <p className="text-xs text-muted-foreground">
        Instagram:{" "}
        <a
          href="https://instagram.com/patagoniasolutionsnqn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          @patagoniasolutionsnqn
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
