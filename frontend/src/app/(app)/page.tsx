/**
 * features articles
 */

import ContactInfo from "@/components/ContactInfo";
import FaQs from "@/components/FaQs";
import Hero from "@/components/Hero";
import Networks from "@/components/Networks";
import OurSponsor from "@/components/OurSponsor";
import OurTearm from "@/components/OurTearm";
import Testimonials from "@/components/Testimonials";
import PeopleSay from "@/components/cards/PeopleSay";

export default function Home() {
  return (
    <>
      <Hero />
      <OurSponsor />
      <Networks />
      <FaQs />
      <Testimonials />
      <PeopleSay />
      <OurTearm />
    </>
  );
}
