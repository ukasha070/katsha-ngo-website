import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const waysToList: { title: string; description: string }[] = [
  {
    title: "Donate to Make an Impact",
    description:
      "Your contributions help provide essential resources, support programs, and reach communities in need, creating real change every day.",
  },
  {
    title: "Volunteer Your Time",
    description:
      "Join our team of dedicated volunteers to support events, programs, and initiatives that directly benefit people in our community.",
  },
  {
    title: "Spread Awareness",
    description:
      "Help us amplify our mission by sharing our stories, campaigns, and successes with your network and on social media.",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with our organization to develop projects, share resources, or bring innovative solutions to communities that need them most.",
  },
  {
    title: "Advocate for Change",
    description:
      "Use your voice to support policies and initiatives that align with our mission, helping create systemic improvements and lasting impact.",
  },
];

const HowToHelp = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <div className="flex flex-col gap-3 max-w-4xl">
          <ol className="flex flex-col gap-8">
            {waysToList.map((wayTo, idx) => (
              <li className="flex items-start gap-4" key={idx}>
                <div className="font-black text-2xl text-black/40">
                  <span>0{idx + 1}</span>
                </div>

                <div>
                  <h2 className="font-bold text-xl mb-3">{wayTo.title}</h2>
                  <p>{wayTo.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HowToHelp;
