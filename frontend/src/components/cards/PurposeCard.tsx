import React from "react";
import { PopUpAnimatedContainer } from "../Animated/PopUpAnimatedContainer";

const PurposeCard = ({
  idx,
  title,
  subtitle,
}: {
  idx: number;
  title: string;
  subtitle: string;
}) => {
  return (
    <PopUpAnimatedContainer
      custom={idx}
      key={title}
      className="shadow-lg p-8 md:p-10"
    >
      <div>
        <div className="pl-7 border-l-2 border-l-yellow-500 mb-5">
          <h2 className="text-3xl font-black">{title}</h2>
        </div>

        <p>{subtitle}</p>
      </div>
    </PopUpAnimatedContainer>
  );
};

export default PurposeCard;
