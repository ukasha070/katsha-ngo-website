import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import JoinWhatsapp from "./JoinWhatsapp";

const SocialsContainer = () => {
  return (
    <>
      <MaxWidthWrapper className="pt-16">
        <div>
          <h2 className="text-3xl font-black mb-6 border-l-4 border-yellow-500 pl-3">
            Connect With Us
          </h2>
          <p className="mb-8">
            Stay in touch through our social platforms and be part of the
            conversation that shapes our community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Facebook", color: "bg-blue-600" },
              { name: "Instagram", color: "bg-pink-500" },
              { name: "Twitter", color: "bg-sky-500" },
              { name: "YouTube", color: "bg-red-500" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`${social.color} text-white rounded-lg p-4 text-center font-medium shadow hover:scale-105 transition`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div></div>
      </MaxWidthWrapper>

      <JoinWhatsapp />
    </>
  );
};

export default SocialsContainer;
