export default function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 scroll-mt-14"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-1 w-12 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">About</span>
        </div>
        <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-primary">
          关于我
        </h2>
        <div className="mt-8 space-y-6 text-primary/80 leading-relaxed">
          <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-primary">教育背景</h4>
              <p className="text-sm text-primary/80 mt-1">北京工业大学 物理学（本科）→ 阿尔托大学 人工智能（硕士）</p>
            </div>
          </div>
          
          <p className="text-lg">
            人工智能专业海归背景，过去三年在创业一线摸爬滚打。从留学期间创办互联网公司、打造住宿、社交应用，再到开发文生 3D 的 AI SaaS 工具，回国后在深圳科创学院探索面向创意工作者的智能硬件——每一段经历都是一次从 0 到 1 的实战。
          </p>
          <p className="text-lg">
            这些项目有小成果，也有失败，但让我深刻理解了如何带领团队、洞察用户需求、打磨产品体验、在高压下快速决策，以及构建可持续的商业模式。三年创业不仅是能力的锤炼，更是认知的迭代。
          </p>
          
          <div className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              考虑从独立创业转向大公司内部创业孵化
            </h3>
            <p className="text-primary/80">
              我寻求的是「<span className="text-accent font-medium">平台资源 + 独立做项目</span>」的结合——既能在知名企业内获得品牌、数据与协作资源，又能继续主导从 0 到 1 的业务，而非单纯打工或单纯创业。
            </p>
            <p className="mt-3 text-primary/80">
              三年创业让我习惯了在资源有限下做决策、扛结果，也让我更清楚自己希望在更大舞台上验证和迭代认知。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
