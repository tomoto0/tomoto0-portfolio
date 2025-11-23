import { Button } from "@/components/ui/button";
import { Heart, Github, Mail, ExternalLink, Star, GitFork } from "lucide-react";
import { useState, useMemo } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { projects } from "@/data/projects";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import ProjectFilterBar from "@/components/ProjectFilterBar";

interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  homepage: string | null;
  stars: number;
  forks: number;
  techStack: string[];
  features: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // ユニークな言語リストを取得
  const uniqueLanguages = useMemo(() => {
    const langs = new Set(projects.map((p) => p.language).filter(Boolean));
    return Array.from(langs).sort();
  }, []);

  // フィルタリング処理
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // キーワード検索
      const keywordMatch =
        filterKeyword === "" ||
        project.name.toLowerCase().includes(filterKeyword.toLowerCase()) ||
        project.description.toLowerCase().includes(filterKeyword.toLowerCase());

      // 言語フィルタ
      const languageMatch =
        selectedLanguages.length === 0 || selectedLanguages.includes(project.language);

      return keywordMatch && languageMatch;
    });
  }, [filterKeyword, selectedLanguages]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleFilterChange = (filters: { keyword: string; languages: string[] }) => {
    setFilterKeyword(filters.keyword);
    setSelectedLanguages(filters.languages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
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
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200/50">
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
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200/50">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <p className="text-slate-600 mb-8">
          Explore {projects.length} public repositories showcasing my work in AI, web development, and economic research.
        </p>
        <ProjectFilterBar languages={uniqueLanguages} onFilterChange={handleFilterChange} />
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No projects match your search criteria.</p>
            <button
              onClick={() => handleFilterChange({ keyword: "", languages: [] })}
              className="mt-4 px-4 py-2 text-rose-600 hover:text-rose-800 font-medium transition"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-slate-500 text-sm mb-6">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
            <button
              key={project.name}
              onClick={() => handleProjectClick(project)}
              className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-rose-300 hover:shadow-lg transition text-left cursor-pointer w-full flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-slate-900 group-hover:text-rose-600 transition flex-1">{project.name}</h3>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition flex-shrink-0 ml-2" />
              </div>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">{project.description}</p>
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="inline-block px-2 py-1 bg-slate-100 text-xs text-slate-600 rounded">{project.language}</span>
              </div>
              <div className="flex gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  <span>{project.forks}</span>
                </div>
              </div>
                </button>
            ))};
            </div>
          </>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200/50">
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
                Personal Website
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
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200/50 text-center text-slate-600">
        <p>© 2025 Tomoto Masuda. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
