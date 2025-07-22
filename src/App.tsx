import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Code, Database, Cloud, Terminal, Github, Linkedin, Mail, MapPin, 
  User, Briefcase, Award, Phone, Menu, X, ChevronDown, Zap,
  Cpu, Server, Globe, Shield
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = {
    languages: [
      { name: 'C#', level: 95, icon: '🔷' },
      { name: 'SQL', level: 90, icon: '🗃️' },
      { name: 'C++', level: 85, icon: '⚡' },
      { name: 'HTML', level: 90, icon: '🌐' },
      { name: 'CSS', level: 85, icon: '🎨' }
    ],
    frameworks: [
      { name: '.NET Core 7', level: 95, icon: '🔧' },
      { name: 'Blazor', level: 90, icon: '⚡' },
      { name: 'Web API', level: 90, icon: '🔗' },
      { name: 'Bootstrap', level: 85, icon: '📱' }
    ],
    databases: [
      { name: 'MS SQL Server', level: 90, icon: '🏢' },
      { name: 'MySQL', level: 80, icon: '🐬' }
    ],
    cloud: [
      { name: 'AWS EC2', level: 75, icon: '☁️' },
      { name: 'AWS S3', level: 70, icon: '📦' },
      { name: 'Linux', level: 80, icon: '🐧' },
      { name: 'CI/CD', level: 75, icon: '🔄' }
    ]
  };

  const projects = [
    {
      title: "University Content Management System",
      description: "Full-stack academic platform with role-based access control",
      tech: [".NET Core", "Blazor", "SQL Server"],
      status: "Production"
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable online shopping solution with payment integration",
      tech: ["Web API", "Bootstrap", "MySQL"],
      status: "Completed"
    },
    {
      title: "DevOps Pipeline",
      description: "Automated CI/CD deployment using AWS services",
      tech: ["AWS EC2", "S3", "Linux"],
      status: "Active"
    }
  ];

  const SkillBar = ({ name, level, icon }: { name: string; level: number; icon: string }) => (
    <div className="skill-item mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center">
          <span className="skill-icon me-2">{icon}</span>
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-fill" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const TechCard = ({ icon: Icon, title, skills, color }: { 
    icon: any; 
    title: string; 
    skills: Array<{name: string, level: number, icon: string}>; 
    color: string;
  }) => (
    <div className="col-lg-6 col-xl-3 mb-4">
      <div className="tech-card glass-card h-100">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-4">
            <div className={`tech-icon-wrapper ${color}`}>
              <Icon size={24} />
            </div>
            <h5 className="card-title mb-0 ms-3 text-white">{title}</h5>
          </div>
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div className="col-lg-4 mb-4">
      <div className="project-card glass-card h-100" style={{ animationDelay: `${index * 0.2}s` }}>
        <div className="card-body p-4">
          <div className="project-status mb-3">
            <span className={`status-badge ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
          <h5 className="project-title text-white mb-3">{project.title}</h5>
          <p className="project-description text-light-gray mb-4">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech: string, techIndex: number) => (
              <span key={techIndex} className="tech-tag me-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="futuristic-portfolio">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top futuristic-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <span className="brand-text">Muhammad Aashir</span>
            <span className="brand-subtitle">.NET Developer</span>
          </a>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  <User size={16} className="me-2" />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <User size={16} className="me-2" />
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <Zap size={16} className="me-2" />
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <Briefcase size={16} className="me-2" />
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  <Award size={16} className="me-2" />
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <Phone size={16} className="me-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge mb-4">
                  <MapPin size={16} className="me-2" />
                  Islamabad, Pakistan
                </div>
                <h1 className="hero-title mb-4">
                  Hi, I'm <span className="gradient-text">Muhammad Aashir</span>
                </h1>
                <h2 className="hero-subtitle mb-4">
                  .NET Developer & Full-Stack Engineer
                </h2>
                <p className="hero-description mb-5">
                  Building robust and scalable web applications with .NET Core, Blazor, and modern technologies. 
                  Transforming ideas into powerful digital solutions.
                </p>
                <div className="hero-actions">
                  <a href="#about" className="btn btn-primary btn-lg me-3">
                    <Zap size={20} className="me-2" />
                    Explore My Work
                  </a>
                  <a href="#contact" className="btn btn-outline-primary btn-lg">
                    <Mail size={20} className="me-2" />
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="floating-elements">
                  <div className="floating-card">
                    <Cpu size={40} />
                    <span>.NET Core</span>
                  </div>
                  <div className="floating-card">
                    <Database size={40} />
                    <span>SQL Server</span>
                  </div>
                  <div className="floating-card">
                    <Cloud size={40} />
                    <span>AWS</span>
                  </div>
                  <div className="floating-card">
                    <Shield size={40} />
                    <span>Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">👋 About Me</h2>
                <p className="section-subtitle">Passionate developer crafting digital experiences</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="about-card glass-card">
                <div className="card-body p-5">
                  <div className="about-content">
                    <p className="about-text mb-4">
                      Hi, I'm Muhammad Aashir, a passionate and results-driven .NET Developer based in Islamabad, Pakistan. 
                      I specialize in building robust and scalable web applications using .NET Core 7, Blazor, and MS SQL Server, 
                      following clean 3-tier architecture principles.
                    </p>
                    <p className="about-text mb-4">
                      I've developed a range of full-stack projects—from university academic content management systems to 
                      e-commerce platforms—with a strong focus on performance, security, and user experience. My work integrates 
                      role-based access control, RESTful APIs, and responsive UIs using Bootstrap.
                    </p>
                    <p className="about-text mb-0">
                      Beyond development, I'm actively exploring DevOps tools like AWS EC2, S3, and CI/CD pipelines, and I'm 
                      comfortable working in Linux-based environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">🔧 Tech Stack</h2>
                <p className="section-subtitle">Technologies I work with</p>
              </div>
            </div>
          </div>
          <div className="row">
            <TechCard 
              icon={Code} 
              title="Languages" 
              skills={techStack.languages}
              color="primary"
            />
            <TechCard 
              icon={Terminal} 
              title="Frameworks & Tools" 
              skills={techStack.frameworks}
              color="secondary"
            />
            <TechCard 
              icon={Database} 
              title="Databases" 
              skills={techStack.databases}
              color="accent"
            />
            <TechCard 
              icon={Cloud} 
              title="Cloud & DevOps" 
              skills={techStack.cloud}
              color="success"
            />
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="tools-section glass-card">
                <div className="card-body p-4">
                  <h3 className="text-center mb-4 text-white">Other Tools & Technologies</h3>
                  <div className="tools-grid">
                    {['Visual Studio', 'VS Code', 'Git', 'SSMS', 'Postman', 'GitHub'].map((tool, index) => (
                      <div key={index} className="tool-item">
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">💼 Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work</p>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">🏆 Experience & Expertise</h2>
                <p className="section-subtitle">My professional journey</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="experience-timeline">
                <div className="timeline-item glass-card">
                  <div className="timeline-content p-4">
                    <div className="timeline-badge">
                      <Server size={20} />
                    </div>
                    <h4 className="text-white mb-2">Full-Stack Development</h4>
                    <p className="text-light-gray mb-3">
                      Specialized in building end-to-end web applications using .NET Core 7, Blazor, and modern web technologies.
                    </p>
                    <div className="timeline-skills">
                      <span className="skill-badge">3-Tier Architecture</span>
                      <span className="skill-badge">RESTful APIs</span>
                      <span className="skill-badge">Role-Based Access</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item glass-card">
                  <div className="timeline-content p-4">
                    <div className="timeline-badge">
                      <Globe size={20} />
                    </div>
                    <h4 className="text-white mb-2">Web Development</h4>
                    <p className="text-light-gray mb-3">
                      Creating responsive and user-friendly interfaces with Bootstrap, focusing on performance and accessibility.
                    </p>
                    <div className="timeline-skills">
                      <span className="skill-badge">Responsive Design</span>
                      <span className="skill-badge">UI/UX</span>
                      <span className="skill-badge">Performance</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item glass-card">
                  <div className="timeline-content p-4">
                    <div className="timeline-badge">
                      <Cloud size={20} />
                    </div>
                    <h4 className="text-white mb-2">DevOps & Cloud</h4>
                    <p className="text-light-gray mb-3">
                      Exploring modern DevOps practices with AWS services, CI/CD pipelines, and Linux environments.
                    </p>
                    <div className="timeline-skills">
                      <span className="skill-badge">AWS EC2</span>
                      <span className="skill-badge">CI/CD</span>
                      <span className="skill-badge">Linux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center mb-5">
                <h2 className="section-title">🚀 Get In Touch</h2>
                <p className="section-subtitle">Let's build something amazing together</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-card glass-card">
                <div className="card-body p-5 text-center">
                  <p className="contact-text mb-5">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
                  </p>
                  <div className="contact-actions">
                    <a href="mailto:muhammad.aashir@example.com" className="contact-btn">
                      <Mail size={24} />
                      <span>Email Me</span>
                    </a>
                    <a href="https://linkedin.com/in/muhammad-aashir" className="contact-btn">
                      <Linkedin size={24} />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/muhammad-aashir" className="contact-btn">
                      <Github size={24} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="futuristic-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="footer-text">&copy; 2025 Muhammad Aashir. Crafted with passion and code.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;