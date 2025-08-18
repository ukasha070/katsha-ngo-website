import { cn } from "@/lib/utils";
import React from "react";
import PopUpTextAnimationContainer from "./Animated/PopUpTextAnimation";

const SectionHead = ({
  smallTitle,
  title,
  subTitles,
  children,
  className,
}: {
  smallTitle?: string;
  title: string;
  subTitles?: string[];
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <div className={cn("flex flex-col gap-2 max-w-xl mb-5", className)}>
        {smallTitle && (
          <div className="text-xs mb-3 p-2 px-4 bg-accent">{smallTitle}</div>
        )}

        <PopUpTextAnimationContainer>
          <h4 className="text-3xl font-black mb-2">{title}</h4>
        </PopUpTextAnimationContainer>

        <div>
          {subTitles &&
            subTitles.map((subTitle, subTitleIndex) => (
              <PopUpTextAnimationContainer
                key={subTitleIndex}
                idx={subTitleIndex}
              >
                <p className="pb-4">{subTitle}</p>
              </PopUpTextAnimationContainer>
            ))}
        </div>

        {children}
      </div>
    </div>
  );
};

export default SectionHead;
