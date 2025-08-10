// components/ContactInfo.tsx

import React from "react";
import { Mail, Phone, MapPin, LucideIcon } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const contactData = [
  {
    title: "Email",
    description: "Contact us at",
    detail: "hello@loopple.com",
    link: "mailto:hello@loopple.com",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "Reach out to us by phone",
    detail: "+516-486-5135",
    link: "tel:+516-486-5135",
    icon: Phone,
  },
  {
    title: "Location",
    description: "Find us at our office",
    detail: "10924 Urna Convallis",
    link: "https://goo.gl/maps/QcWzYETAh4FS3KTD7",
    icon: MapPin,
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div>
      <MaxWidthWrapper className="my-10">
        <div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {contactData.map((contactInfo, contactInfoIndex: number) => (
              <ContactCard
                {...contactInfo}
                contactInfoIndex={contactInfoIndex}
                key={contactInfoIndex}
                isLast={contactInfoIndex === contactData.length - 1} // Check if it's the last item
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

const ContactCard: React.FC<{
  title: string;
  description: string;
  detail: string;
  link: string;
  icon: LucideIcon;
  contactInfoIndex: number;
  isLast: boolean; // New prop to check if it's the last card
}> = ({ title, description, detail, link, icon: Icon, isLast }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-3 text-center",
        isLast ? "max-md:col-span-2 max-md:p-10" : "" // Apply col-span-2 if it's the last card
      )}
    >
      <span>
        <Icon size={35} color="#581ff8" />
      </span>
      <p className="text-2xl font-extrabold text-dark-grey-900">{title}</p>
      <p className="text-base leading-7 text-dark-grey-600">{description}</p>
      <a className="text-lg font-bold text-purple-blue-500" href={link}>
        {detail}
      </a>
    </div>
  );
};

export default ContactInfo;
