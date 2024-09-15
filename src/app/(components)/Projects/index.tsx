import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { CardContent } from "@/components/ui/card";

const Projects = ({ data }: { data: Profile }) => {
  return (
    <Section className="scroll-mb-16">
      <h2 className="text-xl font-bold">My Projects</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2">
        {data.projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              link={"link" in project ? project.link : undefined}
            />
          );
        })}
        {data.projects.length === 0 ? (
          <CardContent className="mx-3 mt-2">Updating...</CardContent>
        ) : null}
      </div>
    </Section>
  );
};

export default Projects;
