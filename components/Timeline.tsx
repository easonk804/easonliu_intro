const timelineItems = [
  {
    year: "2022",
    title: "欧洲留学与创业起点",
    description:
      "去欧洲留学，发现身边有一些值得解决的痛点，于是和同学一起组建团队开始做软件方向的创业，这是正式开始创业的起点。",
    highlight: false,
  },
  {
    year: "2023",
    title: "软件公司与 AI 项目并行",
    description:
      "白天的经历投入到软件公司，在期间做了多款0-1的产品（旅游住宿、社交、买菜等）；晚上的经历和国内认识的几个做算法的同学一起做了一个AI文生3D的模型，并且产品化落地。",
    highlight: false,
  },
  {
    year: "2024",
    title: "项目退出与回国入孵",
    description:
      "软件公司关闭，AI文生3D的项目被购买。回国后接触到深圳科创学院并在年底决定入孵化。",
    highlight: false,
  },
  {
    year: "2025",
    title: "深圳科创学院孵化期",
    description:
      "在深圳科创学院期间，完成了多代产品原型的迭代以及软件平台的开发，还做了几款小的AI应用工具。",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white scroll-mt-14"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-1 w-12 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Journey</span>
        </div>
        <h2 id="timeline-heading" className="text-2xl sm:text-3xl font-bold text-primary">
          经历与迭代
        </h2>
        <p className="mt-3 text-primary/70">
          三年时间线：关键节点、失败/转折、认知升级
        </p>
        <ul className="mt-12 space-y-0" role="list">
          {timelineItems.map((item, index) => (
            <li 
              key={item.year} 
              className="relative pl-10 pb-12 last:pb-0 group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent last:bg-transparent" />
              <div
                className={`absolute left-0 top-1 -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-accent border-accent shadow-lg shadow-accent/30' 
                    : 'bg-white border-accent/40 group-hover:border-accent group-hover:bg-accent/10'
                }`}
                aria-hidden
              />
              <div className={`p-5 rounded-xl transition-all duration-300 ${
                item.highlight 
                  ? 'bg-accent/5 border border-accent/20' 
                  : 'hover:bg-primary/5'
              }`}>
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  item.highlight 
                    ? 'bg-accent text-white' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {item.year}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-primary/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
