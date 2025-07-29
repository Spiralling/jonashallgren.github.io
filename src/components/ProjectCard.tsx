import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  status?: string;
  year?: string;
  link?: string;
  type?: "software" | "research" | "writing";
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  status, 
  year, 
  link,
  type = "software" 
}: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "bg-sage text-sage-foreground";
      case "in progress":
        return "bg-primary-light text-primary-foreground";
      case "published":
        return "bg-sage text-sage-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 border-border/50 hover:border-primary/20">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {link ? (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </CardTitle>
          {year && (
            <span className="text-sm text-muted-foreground font-medium">
              {year}
            </span>
          )}
        </div>
        
        {status && (
          <Badge variant="secondary" className={getStatusColor(status)}>
            {status}
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-primary/20 text-primary hover:bg-primary/5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;