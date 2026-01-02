export default function Skills() {
  const technical = ["Python", "Java", "C", "HTML", "CSS"];
  const tools = ["Firebase", "DBMS", "Git", "VS Code"];
  const soft = ["Problem Solving", "Leadership", "Teamwork", "Communication"];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center
                 px-4 sm:px-6 bg-gray-900"
    >
      <div className="w-full max-w-6xl">
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl
                     font-bold text-center mb-10"
        >
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[["Technical", technical, "blue"],
            ["Tools", tools, "purple"],
            ["Soft Skills", soft, "green"]].map(([title, list, color]: any, i) => (
            <div
              key={title}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="bg-gray-800 p-6 rounded-xl text-center"
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-4 text-${color}-400`}>
                {title}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {list.map((s: string) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-gray-700 rounded-full
                               text-sm sm:text-base"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
