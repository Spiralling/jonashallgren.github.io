import ProjectCard from "@/components/ProjectCard";

const ResearchPapers = () => {
  const papers = [
    {
      title: "Machine Learning Approaches to Data Processing in Academic Research",
      description: "Comprehensive analysis of machine learning techniques for processing large academic datasets. Examines effectiveness of different algorithms and proposes optimized workflows for research applications.",
      technologies: ["Machine Learning", "Data Analysis", "Python", "Statistical Modeling"],
      status: "Published",
      year: "2024",
      link: "#",
    },
    {
      title: "User Experience Design Patterns in Modern Web Applications",
      description: "Systematic study of UX design patterns in contemporary web applications. Analyzes user behavior data and proposes evidence-based design guidelines for improved user engagement.",
      technologies: ["UX Research", "Web Design", "User Analytics", "Human-Computer Interaction"],
      status: "In Review",
      year: "2024",
    },
    {
      title: "Comparative Analysis of Frontend Frameworks for Research Tools",
      description: "Detailed comparison of React, Vue, and Angular for building research-focused web applications. Includes performance benchmarks, developer experience analysis, and practical recommendations.",
      technologies: ["Frontend Development", "Performance Analysis", "Software Engineering"],
      status: "Published",
      year: "2023",
      link: "#",
    },
    {
      title: "Automated Testing Strategies for Academic Software",
      description: "Exploration of testing methodologies specifically tailored for academic and research software. Addresses unique challenges in testing scientific computing applications and data analysis tools.",
      technologies: ["Software Testing", "Quality Assurance", "Academic Software", "CI/CD"],
      status: "Published",
      year: "2023",
      link: "#",
    },
    {
      title: "Data Visualization Best Practices for Research Communication",
      description: "Investigation of effective data visualization techniques for communicating research findings. Combines principles from cognitive science, design theory, and information visualization.",
      technologies: ["Data Visualization", "Research Communication", "Design Theory", "Information Design"],
      status: "In Progress",
      year: "2024",
    },
  ];

  const conferences = [
    {
      name: "International Conference on Web Engineering",
      year: "2024",
      presentation: "Modern Frontend Architecture Patterns",
    },
    {
      name: "Academic Software Development Symposium",
      year: "2023",
      presentation: "Testing Strategies for Research Applications",
    },
    {
      name: "Data Visualization and User Experience Conference",
      year: "2023",
      presentation: "Effective Communication Through Visual Design",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Research Papers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic publications and research work focusing on software engineering, 
            user experience, and technology applications in research.
          </p>
        </div>

        {/* Research Focus */}
        <div className="mb-12 p-6 bg-sage/10 border border-sage/20 rounded-lg">
          <h2 className="text-xl font-semibold text-sage mb-2">Research Interests</h2>
          <p className="text-muted-foreground mb-4">
            My research focuses on the intersection of software engineering and academic work, 
            particularly in areas of user experience design, data visualization, and 
            development methodologies for research applications.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Human-Computer Interaction", "Software Engineering", "Data Visualization", "UX Research", "Academic Software"].map((area) => (
              <span key={area} className="px-3 py-1 bg-sage-light/20 text-sage rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Papers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Publications</h2>
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <ProjectCard
                key={index}
                type="research"
                {...paper}
              />
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8">Conference Presentations</h2>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {conferences.map((conf, index) => (
              <div 
                key={index}
                className="p-6 border border-border rounded-lg hover:border-sage/30 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {conf.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {conf.presentation}
                </p>
                <span className="text-sage font-medium text-sm">
                  {conf.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration */}
        <div className="mt-16 pt-12 border-t border-border text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Research Collaboration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in collaborative research opportunities, 
            particularly in areas that bridge technology and academia. Feel free 
            to reach out if you're working on related projects or have ideas 
            for potential collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;