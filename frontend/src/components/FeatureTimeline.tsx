import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionHead from "./SectionHead";

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description:
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
];

export default function FeatureTimeLine() {
  return (
    <div>
      <div>
        <MaxWidthWrapper className="px-8 mt-12">
          <SectionHead
            title="Our Future"
            subTitles={[
              "We’re building a future driven by hope, innovation, and lasting impact — and the journey is just beginning.",
            ]}
          />
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper className="overflow-visible px-8 md:px-32 mb-12">
        <Timeline defaultValue={3}>
          {items.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="group-data-[orientation=vertical]/timeline:sm:ms-32"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="group-data-[orientation=vertical]/timeline:md:absolute group-data-[orientation=vertical]/timeline:md:-left-32 group-data-[orientation=vertical]/timeline:md:w-20 group-data-[orientation=vertical]/timeline:md:text-right">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className="sm:-mt-0.5">
                  {item.title}
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </MaxWidthWrapper>
    </div>
  );
}
