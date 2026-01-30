const skillGroups = [
  {
    title: "业务洞察",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    items: ["从 0 到 1 的需求与场景定义", "MVP 验证与快速迭代"],
  },
  {
    title: "0–1 搭建",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    items: ["立项与资源协调", "产品上线与持续迭代"],
  },
  {
    title: "团队与协作",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: ["小团队带队经验", "跨部门协作与资源对接"],
  },
  {
    title: "行业理解",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: ["行业关键指标把握", "竞品分析与趋势洞察"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white scroll-mt-14"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-1 w-12 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Skills</span>
        </div>
        <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-primary">
          能力与可交付价值
        </h2>
        <p className="mt-3 text-primary/70">
          「能交付什么」
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2" role="list">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {group.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-primary/75" role="list">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
