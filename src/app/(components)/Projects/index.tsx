import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { CardContent } from "@/components/ui/card";

const Projects = ({ data }: { data: Profile }) => {
  return (
    <Section className="scroll-mb-16">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2">
        {data.projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              role={project.role}
              responsibilities={project.responsibilities}
              technicalContributions={project.technicalContributions}
              description={project.description}
              technologies={project.technologies}
              // link={"link" in project ? project.link : undefined}
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
