import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Details", href: "#details" },
    { label: "Story", href: "#story" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <div className="flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
          <a href="#home" className="px-5 py-3 text-white/90 font-semibold tracking-wide">
            A + J
          </a>

          <nav className="hidden md:flex items-center gap-1 pr-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#rsvp"
              className="ml-2 mr-3 rounded-full bg-white/90 text-gray-900 px-4 py-2 font-medium hover:bg-white transition-colors"
            >
              RSVP
            </a>
          </nav>

          <button
            className="md:hidden p-3 text-white/90"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg overflow-hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setOpen(false)}
              className="block px-5 py-3 bg-white/90 text-gray-900 font-medium"
            >
              RSVP
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
