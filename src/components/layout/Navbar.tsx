import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl glass">
            <span className="font-display text-sm tracking-tight text-silver">
              N
            </span>
          </div>
          <span className="font-display text-sm tracking-widest uppercase text-foreground/90">
            NOX
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-foreground/70 hover:text-foreground" href="#features">
            Features
          </a>
          <a className="text-sm text-foreground/70 hover:text-foreground" href="#tech">
            Tech
          </a>
          <a className="text-sm text-foreground/70 hover:text-foreground" href="#cta">
            Get it
          </a>
        </nav>

        <div className="flex items-center gap-2">
        <Button
  variant="ghost"
  size="sm"
  onClick={() => {
    alert("NOX accounts coming soon.");
  }}
>
  Sign in
</Button>
          <Button size="sm">Get NOX</Button>
        </div>
      </Container>
    </header>
  );
}

