import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Apple, Github, Linkedin, Twitter, Youtube } from "lucide-react"; // example icons

type Sponsor = {
  icon: React.ElementType;
  name: string;
  url: string;
};

const sponsors: Sponsor[] = [
  { icon: Apple, name: "Apple", url: "https://apple.com" },
  { icon: Github, name: "GitHub", url: "https://github.com" },
  { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com" },
  { icon: Twitter, name: "Twitter", url: "https://twitter.com" },
  { icon: Youtube, name: "YouTube", url: "https://youtube.com" },
];

const OurSponsor = () => {
  return (
    <div>
      <MaxWidthWrapper className="bg-background max-w-full py-10">
        <div className="flex items-center flex-wrap gap-5 justify-center text-black/40">
          {sponsors.map((sponsor, index) => {
            const Icon = sponsor.icon;
            return (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition"
              >
                <Icon size={28} />
                <span className="text-sm font-medium">{sponsor.name}</span>
              </a>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurSponsor;
