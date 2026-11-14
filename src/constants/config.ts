type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Muhammad Nofel | Digital Marketing & E-commerce Manager",
    fullName: "Muhammad Nofel",
    email: "m.nofel786@gmail.com",
  },
  hero: {
    name: "Muhammad Nofel",
    p: [
      "Digital Marketing & E-commerce Manager",
      "Helping businesses grow through strategic digital marketing, social media management, and e-commerce operations.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Muhammad Nofel, a BS Information Technology student at Punjab University in Pakistan with practical experience in digital marketing, social media management, and e-commerce operations. I manage social media for UK-based mobile shops and oversee a brand's online store operations across Amazon and Shopify. My work includes managing Meta Ads campaigns, creating marketing content, maintaining product listings, handling orders and inventory, and supporting store promotions. I enjoy combining creative marketing with organized e-commerce management to help businesses strengthen their digital presence.`,
    },
    experience: {
      p: "My Background",
      h2: "Experience.",
      content: "Currently pursuing a BS in Information Technology at Punjab University, Pakistan.",
    },
    feedbacks: {
      p: "Client feedback",
      h2: "Testimonials.",
    },
    works: {
      p: "Selected experience",
      h2: "What I Manage.",
      content: "Examples of my day-to-day work across social media and e-commerce. Business and brand names are intentionally kept confidential.",
    },
  },
};
