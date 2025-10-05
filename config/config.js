import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Imran",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Imran",
  description:
    "A Software Engineer specializing in building native and hybrid mobile apps. I focus on delivering high-performance, user-friendly solutions that solve real-world problems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },

    // working on resume changes
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1NBp3fQXrMouftqGNhggXMpq6bUb7kErv/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I graduated from COMSATS University in 2020 with a degree in Software Engineering. I kick-started my professional career as a mobile application developer at Dev Saar, then moved on to Astute Solutions, and now I’m working remotely.",
    "The tech industry is ever-evolving, and I love growing with it while continually solidifying the fundamentals. I open-source my code from a place of empathy—for future developers, teammates, and users, with accessibility always in mind. I also enjoy being part of developer communities, mentoring new developers, and supporting organizations that promote diversity in tech. I’m sharing my programming journey on Linkedin, helping people who are just getting started in the field.",
    "When I’m not programming, I focus on my hobbies, which include diary writing, doodling, meeting new people, and expanding my network.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "ExecArray",
      description:
        "ExecArray is a Flutter-based event management app that simplifies the purchase or rental of event essentials like chairs, tables, tents, and more. It uses multiple APIs to provide a seamless user experience, helping users efficiently manage event logistics.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/imrankhalid001/ExecArray",
        },
      ],
    },
    {
      title: "PDF Converter: Image to PDF",
      description:
        "PDF Converter is a simple and efficient Android app that allows users to convert images into high-quality PDF files within seconds. Designed for quick and smooth performance, it supports multiple image selections, PDF customization, and offline conversion. Perfect for students, professionals, and everyday users who need a fast and reliable image-to-PDF solution.",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.imidroid.imagetopdf",
        },
      ],
    },

    {
      title: "Key Car Rental",
      description:
        "Key Car Rental App offers a seamless multilingual interface for easy car rentals through search or integrated maps, along with exclusive monthly subscription benefits. Built using MVVM architecture and Kotlin for a modern UI, the app supports secure transactions with payment options like Mada Pay, Paytabs, and Hyperpay.",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=comcom.key",
        },
      ],
    },
    {
      title: "Weat Local Market",
      description:
        "Weat Local is a multi-vendor marketplace that empowers sellers to list items easily with API integration, Room Database, and Firebase Analytics. Developed with MVVM architecture and Kotlin, it offers features like secure payments through Stripe, authentication, and app push notifications for a modern and efficient shopping experience.",
      icons: [
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.weat_local.weatbuyerside",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at imrankhalid696@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:imrankhalid696@gmail.com",
      isPrimary: true,
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/imran-khalid-458a59161/",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Imran Khalid | Software Engineer | Flutter | Reactjs developer",
  description:
    "I create mobile apps and static websites. I graduated from Comsats university Islamabad in 2020 with a degree in Software Engineering.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@ImranKhalid",
  description: "Software Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "ExecArray",
      link: "https://github.com/imrankhalid001/ExecArray",
    },
    {
      title: "Weat Local Market",
      link: "https://play.google.com/store/apps/details?id=com.weat_local.weatbuyerside",
    },
    {
      title: "My GitHub",
      link: "https://github.com/imrankhalid001/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/imran-khalid-458a59161/",
    },
  ],
};
