import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center px-6 overflow-hidden"
    >
      {/* PARALLAX BACKGROUND */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center">
        <img
          src="/profile.jpg"
          alt="Vikas"
          className="w-36 h-36 rounded-full border-4 border-indigo-500 mx-auto mb-6"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Mudavath{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Vikas
          </span>
        </h1>

        <p className="mt-4 max-w-xl mx-auto text-slate-700 dark:text-slate-300">
          IT Student • Web Developer • Learner
        </p>

        <a
          href="/VikasResume3.pdf"
          target="_blank"
          className="inline-block mt-8 px-8 py-3 rounded-xl
                     bg-indigo-600 text-white
                     hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
