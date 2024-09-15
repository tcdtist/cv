import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  link,
}: Project) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <div className="flex items-center justify-between gap-2">
                <a href={link} target="_blank" className="hover:underline">
                  {title}{" "}
                </a>
                <span className="size-1.5 shrink-0 rounded-full bg-green-500"></span>
              </div>
            ) : (
              title
            )}
          </CardTitle>
          {subtitle && <div className="font-mono text-xs">{subtitle}</div>}
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
