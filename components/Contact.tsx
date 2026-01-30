import Link from "next/link";

const contactItems = [
  {
    label: "邮箱",
    value: "eason_k804@outlook.com",
    href: "mailto:eason_k804@outlook.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "手机",
    value: "13048904668",
    href: "tel:13048904668",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "微信",
    value: "Efro660",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.406-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 scroll-mt-14 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-1 w-12 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Contact</span>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>
        <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-primary">
          联系方式
        </h2>
        <p className="mt-4 text-primary/75 max-w-prose mx-auto">
          欢迎猎头、HR 或内部孵化/创新业务负责人进一步沟通
        </p>
        
        <ul className="mt-10 grid gap-4 sm:grid-cols-2" role="list">
          {contactItems.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-primary/60 uppercase tracking-wider">{item.label}</span>
                    <p className="text-primary font-medium group-hover:text-accent transition-colors">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-primary/60 uppercase tracking-wider">{item.label}</span>
                    <p className="text-primary font-medium">{item.value}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        
        <div className="mt-12">
          <Link href="mailto:eason_k804@outlook.com" className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            欢迎进一步沟通
          </Link>
        </div>
      </div>
    </section>
  );
}
