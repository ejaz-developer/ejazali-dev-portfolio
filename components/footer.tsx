import { socialLinks } from "@/data/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto max-w-[680px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-[14px] font-medium text-foreground">
              Ejaz Ali
            </p>
            <p className="mt-1 text-[12px] text-muted">
              Full-stack web engineer · Skardu, Pakistan
            </p>
          </div>

          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-[12px] text-muted-2">
          © {new Date().getFullYear()} Ejaz Ali
        </p>
      </div>
    </footer>
  );
}
