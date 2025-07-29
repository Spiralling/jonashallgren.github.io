import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-section bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  [Your Name]
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate developer, researcher, and writer exploring the intersection 
                of technology, academia, and creative expression.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently focused on [Current Project/Role], with interests spanning 
                software development, research publications, and both technical and 
                creative writing.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-sage-light/20 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Professional Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Current Focus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary">Software Development</h3>
                <p className="text-muted-foreground">
                  Building modern web applications with React, TypeScript, and cutting-edge 
                  technologies. Focus on clean, maintainable code and user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-sage">Research</h3>
                <p className="text-muted-foreground">
                  Conducting research in [Your Field], with recent publications focusing 
                  on [Research Area]. Passionate about advancing knowledge and methodology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary-light">Writing</h3>
                <p className="text-muted-foreground">
                  Exploring both technical writing and creative fiction. Recent projects 
                  include [Writing Project] and various technical documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">About Me</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                With a background in [Your Background], I bring a unique perspective to 
                both technical and creative challenges. My work spans multiple disciplines, 
                from software engineering to academic research to creative writing.
              </p>
              <p>
                I believe in the power of clear communication, whether through code, 
                research papers, or storytelling. My approach emphasizes thoughtful 
                problem-solving, continuous learning, and creating work that makes a 
                meaningful impact.
              </p>
              <p>
                When I'm not coding or writing, you can find me [Personal Interests]. 
                I'm always open to new collaborations and interesting conversations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;