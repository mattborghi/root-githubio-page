type SocialLinksType = {
  name: string;
  url: string;
  className: string;
}[];
export type DataType = {
  imagebaseurl: string;
  name: string;
  role: string;
  roleDescription: string;
  socialLinks: SocialLinksType;
};

export const Data: DataType = {
  imagebaseurl: "https://mattborghi.github.io/",
  name: "Matias Borghi",
  role: "Physicist currently working as a Software Developer",
  roleDescription:
    "I like solving challenges using algorithms and learning about new technologies. On my free time I enjoy playing violin and learning french.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/borghimatias/",
      className: "fab fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/mattborghi",
      className: "fab fa-github",
    },
    {
      name: "gitlab",
      url: "https://gitlab.com/mattborghi",
      className: "fab fa-gitlab",
    },
  ],
};

export type ButtonType = { name: string; path: string; alt: string }[];

export const buttons: ButtonType = [
  {
    name: "Home",
    path: "#home",
    alt: "home",
  },
  {
    name: "CV",
    path: "https://mattborghi.github.io/CV",
    alt: "Curriculum Vitae",
  },
  {
    name: "Blog",
    path: "https://mattborghi.github.io/myblog",
    alt: "My Personal Blog",
  },
  {
    name: "Projects",
    path: "https://mattborghi.github.io/projects",
    alt: "Projects",
  },
  {
    name: "Francais",
    path: "https://mattborghi.github.io/francais",
    alt: "My French Blog",
  },
  {
    name: "Violin",
    path: "https://mattborghi.github.io/violin",
    alt: "My Violin Blog",
  },
];
