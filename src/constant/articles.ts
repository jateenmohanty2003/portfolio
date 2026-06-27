export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string; // Tailored color theme/gradient for the custom vector design of the card
}

export const ARTICLES_ITEMS: ArticleItem[] = [
  {
    id: 'internship-guide',
    title: 'The Ultimate Guide to Landing a UI/UX Internship',
    description: 'A comprehensive guide on securing a UI/UX internship featuring cold DM templates, LinkedIn search queries, and networking tactics from reaching out to 300+ designers.',
    url: 'https://medium.com/fizday/the-ultimate-guide-to-landing-a-ui-ux-internship-11bb2084c595',
    category: 'Career',
    readTime: '7 min read',
    date: 'Oct 2023',
    gradient: 'from-amber-500/20 to-orange-600/20 text-orange-500 border-orange-500/20',
  },
  {
    id: 'freelance-client',
    title: 'How I Landed My First High-Paying Freelance Client as a UI/UX Designer',
    description: 'My personal journey of landing a high-paying freelance project through WhatsApp design communities, along with contract negotiation tips and communication templates.',
    url: 'https://medium.com/@jateenmohanty2003/how-i-landed-my-first-high-paying-freelance-client-as-a-ui-ux-designer-19bd757c6419',
    category: 'Freelancing',
    readTime: '6 min read',
    date: 'Nov 2023',
    gradient: 'from-emerald-500/20 to-teal-600/20 text-emerald-500 border-emerald-500/20',
  },
  {
    id: 'digital-delight',
    title: 'Digital Delight: Mastering the Art of Successful Product Design',
    description: 'A deep dive into product design principles, balancing aesthetic appeal with user experience, and key strategies for building delightful, user-centric digital products.',
    url: 'https://medium.com/@jateenmohanty2003/digital-delight-mastering-the-art-of-successful-product-design-2d228bcba9e2',
    category: 'Product Design',
    readTime: '5 min read',
    date: 'Dec 2023',
    gradient: 'from-blue-500/20 to-indigo-600/20 text-blue-500 border-blue-500/20',
  },
  {
    id: 'emotional-impact',
    title: 'The Emotional Impact of Design: Insights from Ziarah',
    description: 'How visual elements like typography, color palettes, and motion elicit emotions, build trust, and drive user engagement, based on founding designer insights at Ziarah.',
    url: 'https://medium.com/@jateenmohanty2003/the-emotional-impact-of-design-insights-from-ziarah-3bc2b2f6efe4',
    category: 'UX Design',
    readTime: '5 min read',
    date: 'Jan 2024',
    gradient: 'from-rose-500/20 to-pink-600/20 text-rose-500 border-rose-500/20',
  },
  {
    id: 'figma-ai-assignments',
    title: 'Figma AI and Home Assignments: Strategies and Skills to Sustain',
    description: 'Navigating design home assignments and growing design careers in the era of Figma AI and automated tooling without losing your unique designer value.',
    url: 'https://medium.com/@jateenmohanty2003/figma-ai-and-home-assignments-strategies-and-skills-to-sustain-00fb4da6deda',
    category: 'Design Tech',
    readTime: '6 min read',
    date: 'Feb 2024',
    gradient: 'from-purple-500/20 to-fuchsia-600/20 text-purple-500 border-purple-500/20',
  },
  {
    id: 'winning-portfolio',
    title: 'Crafting a Winning Portfolio: A Guide for Beginners',
    description: 'Step-by-step framework for beginners to create high-impact case studies, select the right projects, and capture the interest of design recruiters.',
    url: 'https://medium.com/@jateenmohanty2003/crafting-a-winning-portfolio-a-guide-for-beginners-811488e8a609',
    category: 'Portfolio',
    readTime: '8 min read',
    date: 'Mar 2024',
    gradient: 'from-cyan-500/20 to-teal-500/20 text-cyan-500 border-cyan-500/20',
  },
];
