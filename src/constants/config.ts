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
      subject: {
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
    title: 'Muhammad Nofel | Digital Marketing & E-commerce Specialist',
    fullName: 'Muhammad Nofel',
    email: 'm.nofel786@gmail.com',
  },
  hero: {
    name: 'Muhammad Nofel',
    p: [
      'Building Digital Experiences. Growing Businesses.',
      "I'm Muhammad Nofel, a digital marketing and e-commerce professional passionate about helping businesses strengthen their online presence, manage digital storefronts, and grow through technology-driven solutions.",
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      subject: {
        span: 'Subject',
        placeholder: 'What would you like to discuss?',
      },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'About Me.',
      content: `I'm Muhammad Nofel, a Digital Marketing and E-commerce professional currently pursuing a Bachelor's degree in Information Technology.

I work across digital marketing, social media management, and e-commerce operations, helping businesses strengthen their online presence and manage their digital storefronts.

My experience includes managing Meta Ads campaigns, handling social media platforms, and working with Shopify and Amazon Seller Central.

Alongside my professional work, I'm continuously developing my technical knowledge in web development and modern digital technologies.

I believe in combining creativity, technology, and practical business thinking to build meaningful digital experiences.`,
    },
    experience: {
      p: 'My Background',
      h2: 'Experience.',
      content:
        'Currently pursuing a BS in Information Technology at the University of the Punjab. I am in my 5th semester.',
    },
    feedbacks: {
      p: 'Client feedback',
      h2: 'Testimonials.',
    },
    works: {
      p: 'Selected experience',
      h2: 'Project Case Studies.',
      content:
        'A closer look at my e-commerce, marketplace, social media, and campaign work. Client identities are withheld where appropriate; no performance results are claimed.',
    },
  },
};
