import React from "react";

const ArticlerHeader = ({
  title,
  subTitle,
  timeStamps,
}: {
  title: string;
  subTitle: string;
  timeStamps: string;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-10">
        <h3 className="font-black pl-4 border-l-4 border-yellow-500 min-h-10 flex items-center text-3xl">
          {title}
        </h3>

        <p className="max-w-4xl">{subTitle}</p>

        <div className="flex items-center flex-wrap text-black/70 divide-x gap-3">
          <p className="pr-3">By Admin</p>
          <p className="pr-3">CREATED Tue 02 May 2025</p>
          <p className="pr-3">LAST UPDATED Tue 02 May 2025</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlerHeader;
