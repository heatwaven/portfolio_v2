'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Briefcase, User, ChevronDown, Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://example.com"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization and natural language processing for task creation.",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      github: "https://github.com/yourusername/ai-taskmanager",
      live: "https://example.com"
    },
    {
      title: "Real-Time Chat Application",
      description: "WebSocket-based chat application with end-to-end encryption, file sharing, and video call capabilities.",
      tech: ["React", "Socket.io", "WebRTC", "Express"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://example.com"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data visualization with custom D3.js charts and real-time data updates.",
      tech: ["Vue.js", "D3.js", "FastAPI", "Redis"],
      github: "https://github.com/yourusername/data-dashboard",
      live: "https://example.com"
    }
  ];

const workExperience = [
  {
    role: "Software Engineer",
    company: "Kontron Transportation GmbH",
    period: "June 2024 - Present",
    description: "Developing and optimizing enterprise transportation solutions in an agile environment, focusing on performance improvements and system reliability.",
    highlights: [
      "Optimized Camunda workflows improving execution speed by 50%+",
      "Implemented Keycloak authentication & LDAP integration",
      "Managed deployments with Helm, ArgoCD & Kubernetes"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "EBCONT enterprise GmbH",
    period: "Feb 2024 - May 2024",
    description: "Contributed to enterprise software development, focusing on code refactoring and performance optimization.",
    highlights: [
      "Refactored C# applications using AutoMapper",
      "Improved UI performance through pagination",
      "Resolved issues for newly deployed systems"
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "s IT Solutions",
    period: "July 2020 - Aug 2020",
    description: "Developed modern web applications with focus on security and authentication.",
    highlights: [
      "Developed Angular app for secure JWT token creation",
      "Implemented authentication features",
      "Frontend development with TypeScript"
    ]
  }
];

  const skills = {
  "Languages": ["Java", "C#", "SQL", "TypeScript", "JavaScript"],
  "Backend & Frameworks": ["Spring Boot", "Hibernate", "Camunda (BPMN)", "Node.js", "Express", "Keycloak"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "Helm", "OpenShift", "ArgoCD", "GitLab Runner", "AWS"],
  "Database": ["PostgreSQL", "MySQL", "LDAP", "Oracle"]
};

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    } overflow-x-hidden`}>
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: isDarkMode 
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
            : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 50%)`
        }}
      />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? isDarkMode 
            ? 'bg-black/80 backdrop-blur-md py-4' 
            : 'bg-white/80 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Marko Pavlovic
          </div>
          <div className="flex gap-8 items-center">
            <button 
              onClick={() => setActiveSection('about')}
              className={`transition-colors ${activeSection === 'about' ? 'text-blue-400' : isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('work')}
              className={`transition-colors ${activeSection === 'work' ? 'text-blue-400' : isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`transition-colors ${activeSection === 'projects' ? 'text-blue-400' : isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`transition-colors ${activeSection === 'contact' ? 'text-blue-400' : isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section mit Bild */}

{/* Hero Section mit Bild */}
<section className="min-h-screen flex items-center justify-center relative px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text Seite */}
      <div className="text-center lg:text-left">
        <div className="mb-6">
          <div className="text-sm text-blue-400 mb-2 tracking-wider">HELLO WORLD, I&apos;M</div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Marko Pavlovic
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Backend-focused Full Stack Developer specializing in scalable architectures and high-performance APIs
        </p>
        <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
          <a 
            href="/cv.pdf" 
            download
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 text-white"
          >
            <Download size={20} />
            Download CV
          </a>
          <a 
            href="https://github.com/heatwaven" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-8 py-3 border rounded-full font-semibold transition-all flex items-center gap-2 ${
              isDarkMode 
                ? 'border-gray-600 hover:bg-white/10 text-white' 
                : 'border-gray-300 hover:bg-gray-100 text-gray-900'
            }`}
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/marko-pavlovic-2002" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-8 py-3 border rounded-full font-semibold transition-all flex items-center gap-2 ${
              isDarkMode 
                ? 'border-gray-600 hover:bg-white/10 text-white' 
                : 'border-gray-300 hover:bg-gray-100 text-gray-900'
            }`}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
      
      {/* Bild Seite */}
      <div className="relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-gradient blur-lg opacity-70"></div>
          <img 
            src="/profile.jpg" 
            alt="Marko Pavlovic"
            className="relative rounded-full w-full h-full object-cover border-4 border-white/10"
          />
        </div>
      </div>
    </div>
  </div>
</section>


     {/* About Section - Alternative */}
<section className="py-20 px-6" id="about">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">
      <User className="inline mr-3 text-blue-400" />
      About Me
    </h2>
    
 {/* About Text */}
<div className="max-w-4xl mx-auto mb-16">
  <p className={`text-lg mb-6 leading-relaxed ${
    isDarkMode ? 'text-gray-300' : 'text-gray-700'
  }`}>
    I&apos;m a passionate Software Developer with 9 years of experience in creating robust applications. My journey began at HTL Donaustadt, where I discovered my passion for programming and have been dedicated to it ever since.
  </p>
  <p className={`text-lg mb-6 leading-relaxed ${
    isDarkMode ? 'text-gray-300' : 'text-gray-700'
  }`}>
    Throughout my career, I&apos;ve worked on numerous projects ranging from web applications using various frameworks to complex backend systems. While I&apos;m proficient in JavaScript and modern web technologies, my specialization and preference lies in Java development, where I excel at building scalable, enterprise-level solutions.
  </p>
  <p className={`text-lg leading-relaxed ${
    isDarkMode ? 'text-gray-300' : 'text-gray-700'
  }`}>
    My educational background includes a Matura from HTL Donaustadt in Software Engineering, a Bachelor of Science in Computer Science, and I&apos;m currently pursuing my Master&apos;s degree in Software Engineering. With 2 years of professional experience complemented by valuable internships, I bring both academic knowledge and practical expertise to every project.
  </p>
</div>
    
    {/* Skills - Als Tags */}
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h4 className="text-lg font-semibold mb-3 text-blue-400 text-center">{category}</h4>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {items.map(skill => (
              <span key={skill} className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-blue-400' 
                  : 'bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-300 hover:border-blue-500'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Work Experience Section */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-black/30' : 'bg-gray-50'}`} id="work">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline mr-3 text-blue-400" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className={`relative pl-8 border-l-2 transition-colors ${
                isDarkMode 
                  ? 'border-gray-700 hover:border-blue-400' 
                  : 'border-gray-300 hover:border-blue-500'
              }`}>
                <div className={`absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 ${
                  isDarkMode ? 'border-gray-900' : 'border-white'
                }`} />
                <div className={`p-6 rounded-lg backdrop-blur-sm transition-all ${
                  isDarkMode 
                    ? 'bg-gray-900/50 hover:bg-gray-900/70' 
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}>
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-semibold text-blue-400">{job.role}</h3>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{job.period}</span>
                  </div>
                  <div className={`text-xl mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {job.company}
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.highlights.map((highlight, i) => (
                      <span key={i} className={`text-sm px-3 py-1 rounded-full ${
                        isDarkMode 
                          ? 'text-blue-300 bg-blue-900/20' 
                          : 'text-blue-600 bg-blue-100'
                      }`}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline mr-3 text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                  isDarkMode 
                    ? 'from-blue-600/10 to-purple-600/10' 
                    : 'from-blue-100/50 to-purple-100/50'
                }`} />
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className={`text-xs px-2 py-1 rounded ${
                      isDarkMode 
                        ? 'bg-blue-900/30 text-blue-300' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition-colors ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-black/30' : 'bg-gray-50'}`} id="contact">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach out if you&apos;d like to work together!
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="mailto:marko@pvlc.at"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 text-white"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 text-center border-t ${
        isDarkMode 
          ? 'text-gray-400 border-gray-800' 
          : 'text-gray-600 border-gray-200'
      }`}>
        <p>© 2024 Marko Pavlovic. Built with Next.js & React.</p>
      </footer>
    </div>
  );
}