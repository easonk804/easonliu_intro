import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/content/projects";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium mb-8 group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回关键项目
      </Link>
      
      <div className="flex items-start gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-accent/20">
          {project.icon}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
            {project.title}
          </h1>
          <p className="mt-2 text-accent font-medium">{project.role}</p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-primary/10">
          <h2 className="text-lg font-semibold text-primary mb-3">项目背景</h2>
          <p className="text-primary/80 leading-relaxed">
            {project.details?.background || project.context}
          </p>
        </section>

        {project.details?.challenges && (
          <section>
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              面临的挑战
            </h2>
            <ul className="space-y-3">
              {project.details.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl border border-red-100">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-primary/80">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.details?.solutions && (
          <section>
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              解决方案
            </h2>
            <ul className="space-y-3">
              {project.details.solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-green-50/50 rounded-xl border border-green-100">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-primary/80">{solution}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.details?.outcomes && (
          <section>
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              项目成果
            </h2>
            <ul className="space-y-3">
              {project.details.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-primary/80">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.details?.techStack && project.details.techStack.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-primary mb-4">技术栈</h2>
            <div className="flex flex-wrap gap-2">
              {project.details.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h2 className="text-lg font-semibold text-primary mb-3">核心收获</h2>
          <p className="text-primary/80 leading-relaxed">{project.learnings}</p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-primary/10">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          对此项目感兴趣？欢迎沟通
        </Link>
      </div>
    </article>
  );
}
