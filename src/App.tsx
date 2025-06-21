import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Boxes, Monitor, Terminal, Sun, Moon, FileDown } from 'lucide-react';
import shoeshub from './assets/images/shoeshub.png';
import savorstreet from './assets/images/savorstreet.png';
import cinebinge from './assets/images/cinebinge.png';
import uiComp from './assets/images/uiComp.png';
import interiorUI from './assets/images/interiorUI.png';
import blogspace from './assets/images/blogspace.png';

function App() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      company: "Tata Consultancy Services, Pune",
      position: "Frontend Developer",
      period: "2022 - Present",
      description: "Developed scalable web applications using modern frontend technologies, ensuring performance optimization and maintainability.",
      achievements: [
        "Built reusable components and implemented state management using Redux",
        "Enhanced UI consistency and responsiveness using Tailwind CSS",
        "Implemented authentication, form validation, and session management",
        "Integrated dynamic JavaScript features to enhance interactivity and user engagement",
        "Conducted code reviews and enforced best practices for maintainable code"
      ]
    },
  ];

  const projects = [
    {
      title: "ShoesHub.",
      description: "A sleek sneaker e-commerce platform with filtering, sorting, and cart functionality for a seamless shopping experience.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS"],
      image: shoeshub,
      url: "https://shoes-hub-rose.vercel.app/"
    },
    {
      title: "CineBinge",
      description: "A movie and TV series discovery app with trending lists, detailed pop-ups, and YouTube trailer integration using the MovieDB API.",
      tech: ["React", "Tailwind CSS", "MovieDB API", "Material UI"],
      image: cinebinge,
      url: "https://cine-binge-six.vercel.app/"
    },
    {
      title: "SavorStreet",
      description: "A restaurant website featuring menu browsing, order confirmation, and a smooth user experience for food lovers.",
      tech: ["React", "Vanilla CSS"],
      image: savorstreet,
      url: "https://savor-street-seven.vercel.app/"
    },
    {
      title: "UI Component Library",
      description: "A collection of common frontend interview coding challenges implemented in React, showcasing reusable components and best practices.",
      tech: ["React", "Tailwind CSS"],
      image: uiComp,
      url: "https://ui-component-library-ten.vercel.app/"
    },
    {
      title: "Interior Design UI",
      description: "A visually appealing interior design website with a focus on aesthetics and user experience.",
      tech: ["React", "Tailwind CSS", "ShadCN", "Framer Motion"],
      image: interiorUI,
      url: "https://interior-page-ui.vercel.app/"
    },
    {
      title: "BlogSpace",
      description: "A blogging platform with user authentication, CRUD operation, and a clean, modern UI.",
      tech: ["React", "TypeScript", "Supabase", "GSAP", "Radix UI", "Tailwind CSS" ],
      image: blogspace,
      url: "https://blogspacedotcom.vercel.app/"
    }
  ];

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Frontend Development", items: ["JavaScript", "React", "TypeScript"] },
    { icon: <Boxes className="w-6 h-6" />, name: "State Management", items: ["Redux", "Context API", "Hooks"] },
    { icon: <Monitor className="w-6 h-6" />, name: "UI/UX", items: ["CSS", "Tailwind CSS", "ShadCN", "Material UI", "Framer"] },
    { icon: <Terminal className="w-6 h-6" />, name: "Tools", items: ["GitHub", "VS Code", "Vercel", "Chrome DevTools"] }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href="#">
                <span className="font-space-grotesk font-bold text-xl">RM</span>
              </a>
              <ul className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative py-1 text-sm font-medium transition-colors duration-300 ${activeSection === item.id
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="animate-slide-up min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-white to-white dark:from-zinc-900 dark:via-black dark:to-black opacity-70 transition-colors duration-300"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-space-grotesk text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text animate-gradient">
            Rupa Mahindrakar
          </h1>
          <h2 className="font-space-grotesk text-3xl text-center italic font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text animate-gradient">
            Frontend Developer
          </h2>
          <div className="flex items-center gap-3 justify-center mb-12">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-gray-600 dark:text-gray-400">actively seeking full-time front-end roles.</p>
          </div>
          <div className="flex justify-center gap-8 animate-fade-in">
            <a href="https://github.com/Rupa30" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/rupa-mahindrakar1/" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="/Rupa_Mahindrakar_FrontEnd-Developer.pdf" target="_blank" rel="noopener noreferrer"
              download="Rupa_Mahindrakar_FrontEnd-Developer.pdf"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <FileDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="animate-slide-up py-32 px-4 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk text-4xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">
            Experience
          </h2>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index}
                className="group relative bg-white dark:bg-black rounded-lg p-8 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-2">{exp.position}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-space-grotesk">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.description}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-3"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="animate-slide-up py-32 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk text-4xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index}
                className="group p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="text-gray-600 dark:text-gray-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-gray-200">{skill.name}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="animate-slide-up py-32 px-4 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space-grotesk text-4xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}
                className="group bg-white dark:bg-black rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 animate-fade-in">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{project.title}</h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-zinc-900 text-sm rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="animate-slide-up py-32 px-4 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a href="mailto:rupamahindrakar08@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-black text-gray-600 dark:text-gray-400 text-center border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300">
        <p>© {new Date().getFullYear()} Rupa Mahindrakar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;