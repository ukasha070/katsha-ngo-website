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
  { id: "contact-us", name: "Contact Us", href: "/contact-us" },
  { id: "articles", name: "Articles", href: "/articles" },
  { id: "donate", name: "Donate", href: "/donate" },
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
    photo: "/community/Joshep.png",
    name: "Pr. Joshep Mugoya",
    job: "Spiritual Counselor",
    bio: "assionate about learning and exploring new ideas, I enjoy combining creativity with problem-solving to make a positive impact. Always curious, always growing",
    socialsLink: "https://facebook.com/username"
  },
  {
    photo: "/community/usama-wasswa.png",
    name: "Usama Wasswa",
    job: "Influencer",
    bio: "assionate about learning and exploring new ideas, I enjoy combining creativity with problem-solving to make a positive impact. Always curious, always growing",
    socialsLink: "https://facebook.com/username"
  },
  {
    photo: "/community/katumba-joshua.png",
    name: "Katumba Joshua",
    job: "Mentor at katsha",
    bio: "assionate about learning and exploring new ideas, I enjoy combining creativity with problem-solving to make a positive impact. Always curious, always growing",
    socialsLink: "https://facebook.com/username"
  },
  {
    photo: "/usama.webp",
    name: "Usama Wasswa",
    job: "Marketier",
    bio: "assionate about learning and exploring new ideas, I enjoy combining creativity with problem-solving to make a positive impact. Always curious, always growing",
    socialsLink: "https://facebook.com/username"
  },
];

export const footerLinks = [
  { id: "donate", name: "Donate", href: "/donate" },
  { id: "how-are-we", name: "How we are", href: "/who-we-are" },
  { id: "your-privacy", name: "Your Privacy", href: "/your-privacy" },
  { id: "terms-of-use", name: "Terms of use", href: "/terms-of-use" },
];


export const faqs = [
  {
    _id: 1,
    question: "What is Katsha and what do you do?",
    answer: "Katsha is a Ugandan organization dedicated to bridging the digital divide. We provide accessible educational resources, affordable e-commerce platforms, and social networking opportunities. Our goal is to empower communities by improving computer literacy, facilitating local commerce, and connecting people through meaningful online services.",
    _created_at: "2025-08-20",
  },
  {
    _id: 2,
    question: "Who can benefit from Katsha’s platforms?",
    answer: "Our platforms are designed for everyone in Uganda. Students can access educational resources and internship opportunities, local businesses can reach customers through our e-commerce platform, and individuals can connect safely via our affordable dating app. Essentially, anyone seeking digital tools and services can benefit.",
    _created_at: "2025-08-20",
  },
  {
    _id: 3,
    question: "How can I support Katsha?",
    answer: "You can support us by donating, volunteering, or spreading awareness about our mission. Donations help cover essential costs like server hosting, software subscriptions, and staff compensation. Volunteering allows you to contribute your skills to projects that impact communities across Uganda.",
    _created_at: "2025-08-20",
  },
  {
    _id: 4,
    question: "Why are donations important?",
    answer: "Donations are the backbone of Katsha’s sustainability. They allow us to maintain and improve our services while keeping them affordable or free for users. Your contributions directly fund initiatives that enhance digital literacy, create economic opportunities, and connect people safely.",
    _created_at: "2025-08-20",
  },
  {
    _id: 5,
    question: "How does Katsha ensure volunteer and user safety?",
    answer: "Katsha prioritizes safety and integrity. Our platforms follow strict guidelines for user privacy and data protection. Volunteers and platform users are verified when possible, and we provide guidance to ensure a safe and inclusive environment.",
    _created_at: "2025-08-20",
  },
  {
    _id: 6,
    question: "Can anyone volunteer with Katsha?",
    answer: "Yes! Katsha welcomes volunteers from diverse fields, whether you’re skilled in IT, marketing, education, or community development. Our volunteer program highlights your skills on a portfolio platform and allows you to contribute to projects that make a real difference.",
    _created_at: "2025-08-20",
  },
  {
    _id: 7,
    question: "How do Katsha’s platforms help local businesses?",
    answer: "Our e-commerce platform connects local stores and artisans to customers within their community. By shopping locally, businesses can increase sales while users enjoy easier access to products without relying on distant supply chains.",
    _created_at: "2025-08-20",
  },
  {
    _id: 8,
    question: "How can I stay updated with Katsha’s initiatives?",
    answer: "You can stay updated by subscribing to our newsletter, following our social media channels, or regularly visiting our website. We share news about upcoming programs, volunteer opportunities, success stories, and new features on our platforms.",
    _created_at: "2025-08-20",
  }
]
