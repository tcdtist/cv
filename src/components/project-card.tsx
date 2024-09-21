import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export function ProjectCard({
  name,
  role,
  responsibilities,
  technicalContributions,
  description,
  technologies,
}: Project) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            <div className="flex items-center justify-between gap-2">
              {name}{" "}
            </div>
          </CardTitle>
          {role && <div className="font-mono text-xs">{role}</div>}
          {/* <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div> */}
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
        {responsibilities.length > 0 && (
          <CardContent className="mt-2 space-y-px text-xs">
            {responsibilities.map((responsible, index) => (
              <div key={index}>. {responsible}</div>
            ))}
          </CardContent>
        )}
        {technicalContributions.length > 0 && (
          <CardContent className="mt-2 space-y-px text-xs">
            {technicalContributions.map((responsible, index) => (
              <div key={index}>. {responsible}</div>
            ))}
          </CardContent>
        )}
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {technologies.map((technology) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={technology}
            >
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
