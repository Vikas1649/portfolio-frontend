export default function Education() {
  return (
    <section id="education" className="flex items-center justify-center px-6">
      <div className="w-full max-w-6xl">
        <h2
          className="
            text-4xl sm:text-5xl font-bold text-center mb-14
            text-indigo-600 dark:text-indigo-400
          "
        >
          Education
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* B.Tech */}
          <div className="glass p-8">
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
              B.Tech – Information Technology
            </h3>
            <p className="text-slate-800 dark:text-slate-300">
              Gurunanak Institute of Technology
            </p>
            <p className="text-slate-700 dark:text-slate-400">
              2023 – 2027
            </p>
            <p className="mt-3 font-semibold text-emerald-700 dark:text-emerald-400">
              CGPA: 7.96
            </p>
          </div>

          {/* Intermediate */}
          <div className="glass p-8">
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Intermediate
            </h3>
            <p className="text-slate-800 dark:text-slate-300">
              Sri Chaitanya Junior College
            </p>
            <p className="mt-3 font-semibold text-emerald-700 dark:text-emerald-400">
              84%
            </p>
          </div>

          {/* SSC */}
          <div className="glass p-8 md:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
              SSC
            </h3>
            <p className="text-slate-800 dark:text-slate-300">
              Aakruthi High Techno School
            </p>
            <p className="mt-3 font-semibold text-emerald-700 dark:text-emerald-400">
              92%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
