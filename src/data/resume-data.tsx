import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chi Thanh Dang",
  initials: "tist",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://google.com/maps/place/Ho+Chi+Minh+City",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully delivered multiple products from 0 to 1. With over 4 years of industry experience, I have led teams effectively, ensuring an environment where everyone who can do the best job. Currently, I mainly work with JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54889078?v=4",
  personalWebsiteUrl: "https://www.tcdtist.com/",
  contact: {
    email: "chithanh.tist@gmail.com",
    tel: "+84348911039",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tcdtist",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chithanh-tist",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/tcdtist",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "FPT University",
      degree: "Bachelor's Degree in Information system",
      start: "08/2017",
      end: "04/2021",
    },
  ],
  work: [
    {
      company: "AgeCode Co. Ltd",
      link: "https://agecode.co.jp/",
      badges: ["Remote"],
      title: "Junior Web Developer → Lead Web Developer",
      start: "07/2021",
      end: "Present",
      description:
        "Implemented new features, lead a team, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, Next.js, JavaScript, Node.js",
    },
    {
      company: "[Part-time job]",
      link: "",
      badges: ["Remote"],
      title: "Junior Web Developer → Full Stack Developer",
      start: "01/2021",
      end: "Present",
      description:
        "Implement new features, lead teams from a few people to more than 10 people, solve customer problems, build web applications from 0 to 1. Projects related to education, e-commerce, user social networks, etc. Technology: React, Vue.js, Next.js, Remix, JavaScript, TypeScript, Node.js, MongoDB",
    },
    {
      company: "CyberSoft Academy",
      link: "https://cybersoft.edu.vn/",
      badges: ["Part-time"],
      title: "Teaching Assistant",
      start: "11/2019",
      end: "10/2022",
      description:
        "The teaching assistant supports the teacher by leading engaging classroom activities, grading assignments, and tutoring students to enhance their understanding. They also provide administrative assistance, managing records and preparing materials. Additionally, they aid in managing the classroom, handling discipline, and addressing various needs as they arise.",
    },
    {
      company: "FPT Software",
      link: "https://fptsoftware.com/",
      badges: ["On-site", "Internship"],
      title: "Java Developer → Front-end Web Developer",
      start: "04/2020",
      end: "12/2020",
      description:
        "Front-end developer with expertise in Angular 9, HTML, CSS, and TypeScript, adept at client-side code deployment and server-side Java development using Express Java and Java Web.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Vite/Remix",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Jest",
  ],
  projects: [
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
