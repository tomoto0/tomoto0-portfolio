import { Button } from "@/components/ui/button";
import { Heart, Github, Mail, ExternalLink, Star, GitFork } from "lucide-react";
import { useState, useMemo } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { projects } from "@/data/projects";
import { blogPosts, BlogPost } from "@/data/blog";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import BlogCard from "@/components/BlogCard";
import BlogDetailModal from "@/components/BlogDetailModal";

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
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

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
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={APP_LOGO} alt={APP_TITLE} className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold text-slate-900">{APP_TITLE}</span>
        </div>
        <div className="flex gap-8 text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition">
            Projects
          </a>
          <a href="#blog" className="hover:text-slate-900 transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-slate-900 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Hello, I'm Tomoto</h1>
          <p className="text-xl text-slate-600 mb-8">
            PhD in Economics at University of Sussex. Passionate about AI, economic research, and building innovative solutions that bridge technology and economic understanding.
          </p>
          <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-medium transition">
            Get in Touch
          </Button>
        </div>
        <div className="flex justify-center">
          <img src={APP_LOGO} alt="Profile" className="w-64 h-64 rounded-full shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200/50">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Background</h3>
            <p className="text-slate-600">
              I'm a PhD student in Economics at the University of Sussex, focusing on the intersection of AI and economic analysis. My research explores how machine learning can enhance economic forecasting and policy analysis.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Skills</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Python</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full">
                  <div className="w-full h-full bg-rose-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">TypeScript</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full">
                  <div className="w-5/6 h-full bg-rose-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Machine Learning</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full">
                  <div className="w-5/6 h-full bg-rose-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Economics</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full">
                  <div className="w-full h-full bg-rose-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">React</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full">
                  <div className="w-4/5 h-full bg-rose-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Education</h3>
            <p><strong>Education:</strong> PhD in Economics, University of Sussex</p>
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-rose-600 transition">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <span className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-medium">{project.language}</span>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Blog Section */}
      <section id="blog" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200/50">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Blog & Insights</h2>
        <p className="text-slate-600 mb-12">
          Exploring the intersection of economics, AI, and technology. Sharing insights from research and real-world applications.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={(post) => {
                setSelectedBlogPost(post);
                setIsBlogModalOpen(true);
              }}
            />
          ))}
        </div>
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
            <div className="space-y-4">
              <a
                href="mailto:tomoto@example.com"
                className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition"
              >
                <Mail className="w-5 h-5 text-rose-600" />
                <span className="text-slate-700">Email me</span>
              </a>
              <a
                href="https://github.com/tomoto0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition"
              >
                <Github className="w-5 h-5 text-slate-900" />
                <span className="text-slate-700">GitHub</span>
              </a>
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

      {/* Blog Detail Modal */}
      <BlogDetailModal
        post={selectedBlogPost}
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
      />
    </div>
  );
}
