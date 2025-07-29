import ProjectCard from "@/components/ProjectCard";

const SoftwareProjects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A clean, responsive portfolio built with React, TypeScript, and Tailwind CSS. Features a minimalist design with smooth animations and optimal performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      year: "2024",
      link: "#",
    },
    {
      title: "Task Management Application",
      description: "Full-stack productivity app with real-time collaboration, drag-and-drop functionality, and comprehensive project tracking. Built with modern web technologies and focus on user experience.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Redux"],
      status: "In Progress",
      year: "2024",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data analysis with customizable charts, real-time updates, and export functionality. Designed for research and business intelligence use cases.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "SQLite"],
      status: "Completed",
      year: "2023",
      link: "#",
    },
    {
      title: "Open Source CLI Tool",
      description: "Command-line utility for automating development workflows. Published as an npm package with comprehensive documentation and testing suite.",
      technologies: ["Node.js", "TypeScript", "Commander.js", "Jest"],
      status: "Completed",
      year: "2023",
      link: "#",
    },
    {
      title: "Research Data Pipeline",
      description: "Automated data processing pipeline for academic research. Handles large datasets with parallel processing, validation, and statistical analysis capabilities.",
      technologies: ["Python", "Pandas", "Docker", "Apache Airflow", "MongoDB"],
      status: "In Progress",
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Software Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of software development work spanning web applications, 
            tools, and research-focused solutions.
          </p>
        </div>

        {/* Current Focus */}
        <div className="mb-12 p-6 bg-primary/5 border border-primary/10 rounded-lg">
          <h2 className="text-xl font-semibold text-primary mb-2">Current Focus</h2>
          <p className="text-muted-foreground">
            Primarily working with React, TypeScript, and modern web technologies. 
            Recent interests include data visualization, developer tooling, and 
            research automation pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              type="software"
              {...project}
            />
          ))}
        </div>

        {/* Skills & Technologies */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technologies & Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Frontend</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>React, TypeScript, Next.js</p>
                <p>Tailwind CSS, CSS3, SASS</p>
                <p>D3.js, Chart.js, Three.js</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-sage mb-4">Backend</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Node.js, Python, FastAPI</p>
                <p>PostgreSQL, MongoDB, SQLite</p>
                <p>Docker, Docker Compose</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-light mb-4">Tools</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Git, GitHub, VS Code</p>
                <p>Vite, Webpack, ESLint</p>
                <p>Jest, Cypress, Playwright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProjects;