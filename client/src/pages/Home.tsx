import { Button } from "@/components/ui/button";
import { Heart, Github, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";

const projects = [
  {
    name: "AI Speech Processor",
    description: "最新のAI技術を使用して、音声をリアルタイムでテキスト化し、翻訳、要約するWebアプリ。会議、講演、インタビューなど、あらゆる場面で活躍します。",
    language: "TypeScript",
    url: "https://github.com/tomoto0/ai-speech-processor",
    techStack: ["TypeScript", "AI", "Speech-to-Text", "Translation"],
    features: ["Real-time transcription", "Multi-language translation", "AI summarization", "Web-based"],
  },
  {
    name: "AI Transcribe App",
    description: "Full-stack AI Transcribe application with speech-to-text, translation, and summarization powered by Manus platform",
    language: "TypeScript",
    url: "https://github.com/tomoto0/ai-transcribe-app",
    techStack: ["TypeScript", "Manus Platform", "Speech API", "React"],
    features: ["Speech-to-text", "Translation", "Summarization", "Full-stack"],
  },
  {
    name: "Apple UK Store Website Clone",
    description: "Apple UK Storeウェブサイトのクローン。Next.js, TypeScript, Tailwind CSSで構築。製品ページ、ショッピングカート機能などを実装。",
    language: "TypeScript",
    url: "https://github.com/tomoto0/Apple-UK-Store-website-clone",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
    features: ["Product pages", "Shopping cart", "Responsive design", "Modern UI"],
  },
  {
    name: "Crypto Intelligence Dashboard",
    description: "暗号資産市場の参加者向け分析プラットフォーム。CoinGecko APIからリアルタイム価格データを取得し、AI駆動の分析コメントとトレードアドバイスを提供。",
    language: "TypeScript",
    url: "https://github.com/tomoto0/crypto-intelligence-dashboard",
    techStack: ["TypeScript", "CoinGecko API", "AI", "Data Visualization"],
    features: ["Real-time data", "AI analysis", "Trading advice", "Market indicators"],
  },
  {
    name: "DigestPost",
    description: "AI News Curator Bot for X (Twitter) - 主要メディアのニュースを自動でキュレーションし、投稿する。",
    language: "TypeScript",
    url: "https://github.com/tomoto0/DigestPost",
    techStack: ["TypeScript", "X API", "AI", "Automation"],
    features: ["News curation", "Automated posting", "Media integration", "AI filtering"],
  },
  {
    name: "AI Paper Navigator",
    description: "arXivの論文を検索し、Abstractを翻訳して提供するアプリケーション。",
    language: "TypeScript",
    url: "https://github.com/tomoto0/ai-paper-navigator",
    techStack: ["TypeScript", "arXiv API", "Translation API", "React"],
    features: ["Paper search", "Abstract translation", "Metadata display", "Academic research"],
  },
  {
    name: "IELTS Asteroid Game",
    description: "Interactive IELTS Vocabulary Asteroid Game - 708のIELTS単語、11言語翻訳、AI機能付きのゲーム。",
    language: "JavaScript",
    url: "https://github.com/tomoto0/ielts-asteroid-game",
    techStack: ["JavaScript", "Canvas API", "Game Engine", "Learning"],
    features: ["Interactive gameplay", "Vocabulary learning", "Typing practice", "Multi-language"],
  },
  {
    name: "Japan Economic Dashboard",
    description: "日本経済分析ダッシュボード - e-Stat API × Gemini AI による都道府県別経済指標分析。",
    language: "JavaScript",
    url: "https://github.com/tomoto0/japan-economic-dashboard",
    techStack: ["JavaScript", "e-Stat API", "Gemini AI", "Data Visualization"],
    features: ["Economic indicators", "AI analysis", "Regional data", "Interactive charts"],
  },
  {
    name: "Economics Research Platform",
    description: "経済学研究プラットフォーム - 仮説生成と議論を支援するWebアプリケーション。",
    language: "HTML",
    url: "https://github.com/tomoto0/economics-research-platform",
    techStack: ["HTML", "JavaScript", "Research Tools", "Collaboration"],
    features: ["Hypothesis generation", "Discussion support", "Research tools", "Academic focus"],
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-semibold text-slate-900">Tomoto</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm text-slate-600 hover:text-rose-600 transition">About</a>
            <a href="#projects" className="text-sm text-slate-600 hover:text-rose-600 transition">Projects</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-rose-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Hello, I'm <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Tomoto</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              PhD in Economics at University of Sussex. Passionate about building AI-powered tools for research, data analysis, and web development. I combine economic research expertise with modern web technologies and cutting-edge AI.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-lg font-medium hover:border-rose-500 hover:text-rose-600 transition">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-rose-200 shadow-2xl">
              <img src={APP_LOGO} alt="Tomoto" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/50">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a PhD candidate in Economics at the University of Sussex, combining economic research with cutting-edge AI and web technologies. My projects focus on creating intelligent tools for research, data analysis, and automation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From AI-powered transcription and translation tools to economic dashboards and research platforms, I'm passionate about leveraging technology to make research more accessible and efficient. My work spans TypeScript, Python, and modern web frameworks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Skills</h3>
            <div className="space-y-4">
              {[
                { name: "TypeScript", level: 90 },
                { name: "Python", level: 88 },
                { name: "React", level: 85 },
                { name: "AI/LLM Integration", level: 82 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-400 to-pink-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/50">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-rose-300 hover:shadow-lg transition text-left cursor-pointer w-full"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-slate-900 group-hover:text-rose-600 transition flex-1">{project.name}</h3>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition flex-shrink-0 ml-2" />
              </div>
              <p className="text-sm text-slate-600 mb-4 line-clamp-5">{project.description}</p>
              <span className="inline-block px-2 py-1 bg-slate-100 text-xs text-slate-600 rounded">{project.language}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/50">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-600 mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="https://github.com/tomoto0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://tomoto0.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-900 rounded-lg font-medium hover:border-rose-500 hover:text-rose-600 transition ml-4"
              >
                <ExternalLink className="w-5 h-5" />
                Portfolio
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Get in Touch</h3>
            <p className="text-slate-600 mb-6">
              Feel free to contact me via GitHub or visit my personal website for more information.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <p><strong>Email:</strong> Available on GitHub profile</p>
              <p><strong>Location:</strong> Brighton, UK</p>
              <p><strong>Education:</strong> PhD in Economics, University of Sussex</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200/50 text-center text-slate-600">
        <p>© 2025 Tomoto Masuda. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
