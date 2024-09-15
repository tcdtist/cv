import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const SOCIALS = {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
};

const Header = ({ data }: { data: Profile }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {data.summary}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={data.locationLink}
            target="_blank"
          >
            <GlobeIcon className="size-3" />
            {data.location}
          </a>
        </p>
        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          {data.contact.email ? (
            <Button className="size-8" variant="outline" size="icon" asChild>
              <a href={`mailto:${data.contact.email}`}>
                <MailIcon className="size-4" />
              </a>
            </Button>
          ) : null}
          {data.contact.tel ? (
            <Button className="size-8" variant="outline" size="icon" asChild>
              <a href={`tel:${data.contact.tel}`}>
                <PhoneIcon className="size-4" />
              </a>
            </Button>
          ) : null}
          {data.contact.social.map((social: SocialLink) => {
            // @ts-ignore
            const SocialIcon = SOCIALS[social.icon];

            return (
              <Button
                key={social.name}
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.url}>
                  <SocialIcon icon={social.icon} className="size-4" />
                </a>
              </Button>
            );
          })}
        </div>
        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
          {data.contact.email ? (
            <a href={`mailto:${data.contact.email}`}>
              <span className="underline">{data.contact.email}</span>
            </a>
          ) : null}
          {data.contact.tel ? (
            <a href={`tel:${data.contact.tel}`}>
              <span className="underline">{data.contact.tel}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="size-36">
        <AvatarImage alt={data.name} src={data.avatarUrl} />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
