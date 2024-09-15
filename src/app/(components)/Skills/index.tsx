import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const Skills = ({ data }: { data: Profile }) => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {data.skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </Section>
  );
};

export default Skills;
