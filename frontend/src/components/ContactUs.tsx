"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHead from "./SectionHead";
import CustomBtn from "./buttons/CustomBtn";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ContactInfo from "./ContactInfo";
import ContactForm from "./forms/ContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
  return (
    <>
      <MaxWidthWrapper className="pt-14">
        <SectionHead
          className="text-center mx-auto"
          title=" Contact Us"
          subTitles={[
            " We’d love to hear from you! Whether you have questions, want to volunteer, or support Katsha, our team is here to help.",
          ]}
        />
      </MaxWidthWrapper>

      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default ContactPage;
