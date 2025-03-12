
import { Github, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-8 w-8 text-primary animate-glow-pulse" />
          <span className="text-xl font-bold text-gradient">CloudOps</span>
        </div>
        <Button variant="outline" className="glass" onClick={() => window.open("https://github.com", "_blank")}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </header>
  );
};

export default Header;
