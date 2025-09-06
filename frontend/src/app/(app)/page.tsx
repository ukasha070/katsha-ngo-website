import type { Metadata } from "next";

/**
 * features articles
 */
import FaQs from "@/components/FaQs";
import Hero from "@/components/hero/Hero";
import Networks from "@/components/Networks";
import ContactInfo from "@/components/ContactInfo";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/page-components/home/Articles";
import HomeAbout from "@/components/page-components/home/HomeAbout";
import Newsletter from "@/components/forms/Newsletter";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <>
      <Hero />

      <Networks />
      <Articles />
      <FaQs />
      <CallToAction />
      <Testimonials />
      <HomeAbout />
      <Newsletter />
      <ContactInfo />
    </>
  );
}
