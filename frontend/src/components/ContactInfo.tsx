// components/ContactInfo.tsx

import React from "react";

/**
 * components
 */
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactInfoCard from "./cards/ContactInfoCard";

const contactData = [
  {
    title: "Email",
    description: "Contact us at",
    detail: "hello@katsha.org",
    link: "mailto:hello@katsha.org",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "Reach out to us by phone",
    detail: "+256-708-332-391",
    link: "tel:+256-708-332-391",
    icon: Phone,
  },
  {
    title: "Location",
    description: "Find us at our office",
    detail: "Kampala Ndejje",
    link: "https://www.google.com/maps/search/ndejje+kanaaba/@0.2230275,32.5896342,18z/data=!3m1!4b1?hl=en&entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D",
    icon: MapPin,
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {contactData.map((contactInfo, contactInfoIndex: number) => (
              <ContactInfoCard
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

export default ContactInfo;
