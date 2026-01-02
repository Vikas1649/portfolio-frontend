import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Education", href: "education" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  /* ===== THEME SETUP ===== */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && systemDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  /* ===== ACTIVE SECTION ===== */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white dark:bg-black/40
        backdrop-blur-lg
        border-b border-slate-200 dark:border-white/10
        shadow-sm dark:shadow-none
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Vikas.dev
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className={`transition ${
                active === link.href
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-indigo-600"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              ml-4 px-3 py-1 rounded-lg
              bg-indigo-600 text-white
              hover:bg-indigo-700 transition
            "
          >
            {dark ? "☀" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-slate-700 dark:text-slate-200"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-white dark:bg-black">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={() => setOpen(false)}
              className={`block py-3 transition ${
                active === link.href
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="mt-4 w-full py-2 rounded-lg bg-indigo-600 text-white"
          >
            {dark ? "Light Mode ☀" : "Dark Mode 🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}
