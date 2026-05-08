import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl glass">
            <span className="font-display text-sm tracking-tight text-silver">
              N
            </span>
          </div>
          <div>
            <div className="font-display text-sm tracking-widest uppercase">
              NOX
            </div>
            <div className="text-xs text-foreground/60">
              Silence. Perfected.
            </div>
          </div>
        </div>

        <div className="text-xs text-foreground/60">
          © {new Date().getFullYear()} NOX. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

