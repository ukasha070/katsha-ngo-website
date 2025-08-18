import React from "react";

const PurposeCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div className="shadow-lg p-8 md:p-10">
        <div className="pl-7 border-l-2 border-l-yellow-500 mb-5">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default PurposeCard;
