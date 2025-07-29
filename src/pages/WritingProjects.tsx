import ProjectCard from "@/components/ProjectCard";

const WritingProjects = () => {
  const technicalWriting = [
    {
      title: "The Complete Guide to Modern React Development",
      description: "Comprehensive tutorial series covering React best practices, hooks, performance optimization, and modern development patterns. Written for developers transitioning from class components to modern React.",
      technologies: ["Technical Writing", "React", "JavaScript", "Tutorial"],
      status: "Completed",
      year: "2024",
      link: "#",
    },
    {
      title: "API Design Principles for Research Applications",
      description: "In-depth guide on designing APIs specifically for academic and research use cases. Covers data modeling, security considerations, and documentation best practices.",
      technologies: ["API Design", "Technical Documentation", "Software Architecture"],
      status: "In Progress",
      year: "2024",
    },
    {
      title: "Data Visualization with D3.js: A Practical Approach",
      description: "Step-by-step tutorial series on creating interactive data visualizations with D3.js. Includes real-world examples and best practices for performance and accessibility.",
      technologies: ["D3.js", "Data Visualization", "JavaScript", "Tutorial"],
      status: "Completed",
      year: "2023",
      link: "#",
    },
  ];

  const creativeWriting = [
    {
      title: "Digital Echoes",
      description: "A collection of short fiction exploring themes of technology, human connection, and the digital age. Stories range from near-future science fiction to contemporary drama with technological undertones.",
      technologies: ["Fiction", "Science Fiction", "Short Stories", "Digital Age"],
      status: "In Progress",
      year: "2024",
    },
    {
      title: "The Algorithm's Dream",
      description: "Novella following an AI researcher who discovers their experimental algorithm has begun exhibiting unexpected creative behaviors. Explores questions of consciousness, creativity, and the nature of intelligence.",
      technologies: ["Novella", "Science Fiction", "AI Themes", "Speculative Fiction"],
      status: "Completed",
      year: "2023",
    },
    {
      title: "Fragments of Code and Memory",
      description: "Personal essays reflecting on the intersection of technology and human experience. Explores how digital tools shape our thinking, relationships, and creative processes.",
      technologies: ["Essays", "Personal Narrative", "Technology Culture", "Memoir"],
      status: "In Progress",
      year: "2024",
    },
  ];

  const blogs = [
    {
      title: "Building Better Developer Tools",
      platform: "Medium",
      description: "Series of articles on creating developer tools that actually improve productivity.",
      year: "2024",
    },
    {
      title: "The Art of Technical Communication",
      platform: "Dev.to",
      description: "Thoughts on writing clear, accessible technical documentation and tutorials.",
      year: "2023-2024",
    },
    {
      title: "Creative Writing in the Digital Age",
      platform: "Personal Blog",
      description: "Reflections on how technology influences creative writing and storytelling.",
      year: "2023-2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Writing Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse collection of technical documentation, creative fiction, 
            and essays exploring the intersection of technology and human experience.
          </p>
        </div>

        {/* Writing Philosophy */}
        <div className="mb-12 p-6 bg-primary-light/10 border border-primary-light/20 rounded-lg">
          <h2 className="text-xl font-semibold text-primary-light mb-2">Writing Philosophy</h2>
          <p className="text-muted-foreground">
            I believe in the power of clear, thoughtful communication—whether explaining 
            complex technical concepts or exploring human stories. My writing aims to bridge 
            the gap between technical expertise and accessible understanding, while also 
            exploring how technology shapes our lived experiences.
          </p>
        </div>

        {/* Technical Writing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Technical Writing</h2>
          <div className="space-y-6">
            {technicalWriting.map((project, index) => (
              <ProjectCard
                key={index}
                type="writing"
                {...project}
              />
            ))}
          </div>
        </div>

        {/* Creative Writing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Creative Writing</h2>
          <div className="space-y-6">
            {creativeWriting.map((project, index) => (
              <ProjectCard
                key={index}
                type="writing"
                {...project}
              />
            ))}
          </div>
        </div>

        {/* Blog Posts & Articles */}
        <div className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8">Blog Posts & Articles</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div 
                key={index}
                className="p-6 border border-border rounded-lg hover:border-primary-light/30 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-light font-medium text-sm">
                    {blog.platform}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {blog.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Interests */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Current Writing Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-sage">Technical Topics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modern web development practices</li>
                <li>• Developer experience and tooling</li>
                <li>• Data visualization techniques</li>
                <li>• Software architecture patterns</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-light">Creative Themes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Technology's impact on human connection</li>
                <li>• AI and consciousness in fiction</li>
                <li>• Digital age identity and memory</li>
                <li>• The future of work and creativity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingProjects;