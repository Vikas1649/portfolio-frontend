export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Built using React, Tailwind CSS, and a Python Flask SMTP backend.",
    },
    {
      title: "Python Mini Projects",
      desc: "Logic-based programs focusing on automation and problem solving.",
    },
    {
      title: "Web Designs",
      desc: "Responsive and modern UI layouts using HTML and CSS.",
    },
  ];

  return (
    <section id="projects" className="flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <h2
          className="
            text-4xl sm:text-5xl font-bold text-center mb-14
            text-slate-900 dark:text-indigo-400
          "
        >
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="glass p-8">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                {p.title}
              </h3>

              <p className="text-slate-800 dark:text-slate-300 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-6 h-[2px] w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
