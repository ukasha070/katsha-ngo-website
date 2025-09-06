import React from "react";

const FundraiseProgress = ({
  currencyIcon,
  raised_amount,
  target_amount,
}: {
  currencyIcon: string;
  raised_amount: string;
  target_amount: string;
}) => {
  return (
    <div className="w-full">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-yellow-600 bg-yellow-200">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold inline-block text-yellow-900">
              {currencyIcon}
              {raised_amount} of {currencyIcon}
              {target_amount}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
          {target_amount && raised_amount ? (
            <div
              style={{
                width: `${
                  (Number(raised_amount) / Number(target_amount)) * 100
                }%`,
              }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-900 transition-all duration-500"
            ></div>
          ) : (
            <div className="w-full bg-yellow-900"></div> // Fallback for no data
          )}
        </div>
      </div>
    </div>
  );
};

export default FundraiseProgress;
