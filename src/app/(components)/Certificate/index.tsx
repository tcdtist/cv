import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Certificate = ({ data }: { data: Profile }) => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Certificate</h2>
      {data.certifications.map((certification) => {
        return (
          <Card key={certification.name}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">
                  {certification.name}
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {certification.start} - {certification.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">
              {certification.organization}
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
};

export default Certificate;
