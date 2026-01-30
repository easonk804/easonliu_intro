import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              P
            </span>
            <span className="text-primary font-semibold">个人展示</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#about" className="text-primary/60 hover:text-accent transition-colors">关于我</Link>
            <Link href="#timeline" className="text-primary/60 hover:text-accent transition-colors">经历</Link>
            <Link href="#projects" className="text-primary/60 hover:text-accent transition-colors">项目</Link>
            <Link href="#skills" className="text-primary/60 hover:text-accent transition-colors">能力</Link>
            <Link href="#contact" className="text-primary/60 hover:text-accent transition-colors">联系</Link>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary/50 text-sm">
            © {year} 个人展示站 · 简历介绍
          </p>
          <p className="text-primary/40 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
