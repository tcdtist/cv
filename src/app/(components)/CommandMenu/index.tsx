import { CommandMenu as CommandMenuUI } from "@/components/command-menu";

const CommandMenu = ({ data }: { data: Profile }) => {
  return (
    <CommandMenuUI
      links={[
        {
          url: data.personalWebsiteUrl,
          title: "Personal Website",
        },
        ...data.contact.social.map((socialMediaLink) => ({
          url: socialMediaLink.url,
          title: socialMediaLink.name,
        })),
      ]}
    />
  );
};

export default CommandMenu;
