import { Section } from "@/components/ui/section";

const About = ({ data }: { data: Profile }) => {
  return (
    <Section>
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {data.about}
      </p>
    </Section>
  );
};

export default About;
