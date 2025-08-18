import {
  Projector,
  Smile,
  Users,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export const DOLLAR_IN_UGX: number = 3600;

export const menuItems: { id: string; name: string; href: string }[] = [
  { id: "home", name: "Home", href: "/" },
  { id: "who-we-are", name: "Who we are", href: "/who-we-are" },
  { id: "networks", name: "Networks", href: "/networks" },
  { id: "community", name: "Our Community", href: "/community" },
  { id: "articles", name: "Articles", href: "/articles" },
];

export const donationFormSteps = [
  {
    id: 1,
    title: "Amount",
  },
  {
    id: 2,
    title: "Infomation",
  },
];

export const donationCurrencies = [
  {
    id: 1,
    value: "UGX",
    title: "UGX",
  },
  {
    id: 1,
    value: "UGX",
    title: "UGX",
  },
];

export const stats = [
  { label: "Projects Completed", target: 1200, icon: Projector },
  { label: "Happy Clients", target: 800, icon: Smile },
  { label: "Volunteers", target: 350, icon: Users },
  { label: "Countries Reached", target: 15, icon: Globe },
];

export const teamMembers = [
  {
    photo: "/usama.webp",
    name: "Usama Wasswa",
    job: "Marketier",
    bio: "assionate about learning and exploring new ideas, I enjoy combining creativity with problem-solving to make a positive impact. Always curious, always growing",
    socials: [
      { href: "https://facebook.com/username", icon: Facebook },
      { href: "https://twitter.com/username", icon: Twitter },
      { href: "https://instagram.com/username", icon: Instagram },
      { href: "https://linkedin.com/in/username", icon: Linkedin },
    ],
  },
];

export const footerLinks = [
  { id: "donate", name: "Donate", href: "/donate" },
  { id: "how-are-we", name: "How we are", href: "/who-we-are" },
  { id: "your-privacy", name: "Your Privacy", href: "/your-privacy" },
  { id: "terms-of-use", name: "Terms of use", href: "/terms-of-use" },
];
