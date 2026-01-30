import Image from "next/image";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 scroll-mt-14"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-1 w-12 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Projects</span>
        </div>
        <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-primary">
          关键项目与成果
        </h2>
        <p className="mt-3 text-primary/70">
          用事实证明能独立带项目、有业务结果
        </p>
        <ul className="mt-12 space-y-8" role="list">
          {projects.map((project) => (
            <li
              key={project.id}
              className="group relative rounded-2xl border border-primary/10 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <div className="ml-8 sm:ml-10">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                    {project.role}
                  </span>
                </div>
                <dl className="mt-5 space-y-4 text-primary/80">
                  <div className="flex gap-3">
                    <dt className="flex-shrink-0 w-20 font-medium text-primary/90">背景</dt>
                    <dd>{project.context}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="flex-shrink-0 w-20 font-medium text-primary/90">结果</dt>
                    <dd className="text-accent font-medium">{project.result}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="flex-shrink-0 w-20 font-medium text-primary/90">收获</dt>
                    <dd>{project.learnings}</dd>
                  </div>
                  {project.screenshot && (
                    <div className="flex gap-3">
                      <dt className="flex-shrink-0 w-20 font-medium text-primary/90">成果</dt>
                      <dd className="flex-1">
                        <div className="mt-2 rounded-xl overflow-hidden border border-primary/10 shadow-sm">
                          <Image
                            src={project.screenshot}
                            alt={`${project.title}成果截图`}
                            width={800}
                            height={450}
                            className="w-full h-auto"
                          />
                        </div>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
