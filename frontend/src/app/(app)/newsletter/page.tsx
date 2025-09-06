import React from "react";

// components
import Newsletter from "@/components/forms/Newsletter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionHead from "@/components/SectionHead";

// newsletterInfo.ts
export const newsletterGuidelines: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Updates on Our Mission",
    description:
      "You’ll receive stories about how we are bridging the digital divide and empowering communities.",
  },
  {
    id: 2,
    title: "Transparency",
    description:
      "We respect your inbox—expect only meaningful updates, not spam.",
  },
  {
    id: 3,
    title: "Opportunities to Engage",
    description:
      "Learn about upcoming events, volunteer opportunities, and ways to support our work.",
  },
  {
    id: 4,
    title: "Privacy First",
    description:
      "Your information is safe with us—we’ll never share your email with third parties.",
  },
];

const page = () => {
  return (
    <div>
      <MaxWidthWrapper className="mt-16">
        <SectionHead
          title="Join our Newsletter"
          subTitles={[
            "“Stay updated with our mission, impact stories, and upcoming opportunities.”",
          ]}
        />

        <div className="w-full p-10 bg-accent rounded-xl">
          <ol className="flex flex-col gap-8">
            {newsletterGuidelines.map((newsletterGuide, idx) => (
              <li className="flex items-start gap-4" key={idx}>
                <div className="font-black text-2xl text-black/40">
                  <span>0{idx + 1}</span>
                </div>

                <div>
                  <h4 className="font-bold mb-1 text-black/70 @[300px]:hidden">
                    {newsletterGuide.title}
                  </h4>
                  <p>{newsletterGuide.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </MaxWidthWrapper>

      <Newsletter />
    </div>
  );
};

export default page;
