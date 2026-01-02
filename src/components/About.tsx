export default function About() {
  return (
    <section id="about" className="flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* ABOUT CARD */}
        <div className="glass p-8 sm:p-10">
          <h2
            className="
              text-3xl sm:text-4xl font-bold mb-5
              text-slate-900 dark:text-indigo-400
            "
          >
            About Me
          </h2>

          <p className="mb-4">
            I am{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Mudavath Vikas
            </span>
            , a B.Tech 3rd year IT student at Gurunanak Institute of Technology
            with a CGPA of{" "}
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
              7.96
            </span>.
          </p>

          <p>
            I enjoy building modern, responsive web applications and
            continuously improving my skills in frontend and backend
            technologies.
          </p>
        </div>

        {/* SKILLS CARD */}
        <div className="glass p-8 sm:p-10">
          <h2
            className="
              text-3xl sm:text-4xl font-bold mb-6
              text-slate-900 dark:text-indigo-400
            "
          >
            Skills
          </h2>

          {/* Technical */}
          <div className="mb-5">
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">
              Technical
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "JavaScript", "Python", "Flask"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-indigo-200/70 text-indigo-900
                      dark:bg-white/10 dark:text-slate-100
                    "
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-5">
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Firebase", "Vercel"].map((tool) => (
                <span
                  key={tool}
                  className="
                    px-3 py-1 text-sm rounded-full
                    bg-cyan-200/70 text-cyan-900
                    dark:bg-white/10 dark:text-slate-100
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Communication", "Teamwork"].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-1 text-sm rounded-full
                    bg-emerald-200/70 text-emerald-900
                    dark:bg-white/10 dark:text-slate-100
                  "
                  >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
