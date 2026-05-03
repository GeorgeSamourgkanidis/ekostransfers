import { BUSINESS } from "@/lib/pricing";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 pb-4 lg:px-8">
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-4 text-center text-sm text-primary-foreground/50">
          <div className="flex items-center gap-2">
            <span>
              Copyright
              {"© "}
              {new Date().getFullYear()} {BUSINESS.name}
            </span>

            <span>MHTE 0938E60000064100</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
