import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full">
            三年创业经历 · 经历横跨软件、AI、硬件
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight animate-fade-in-up animate-delay-100">
          [刘顺强]
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-primary/75 leading-relaxed max-w-prose mx-auto animate-fade-in-up animate-delay-200">
          想做 <span className="text-accent font-medium">[AI应用·出海]</span> 从 0 到 1
          <br className="hidden sm:block" />

        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <Link href="#contact" className="btn-primary">
            欢迎进一步沟通
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 px-6 py-3 text-base font-medium text-primary hover:border-accent hover:text-accent transition-all duration-200"
          >
            查看项目经历
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-primary/40 hover:text-accent transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
