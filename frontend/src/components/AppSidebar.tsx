import React from "react";

/***
 * components
 */

const AppSidebar = () => {
  return (
    <div>
      <div className="overlay-container" />
      <div className="fixed w-screen h-screen">
        <div className="w-full h-full relative bg-red-500">
          <div className="absolute right-0 h-screen max-md:max-w-10/12 md:max-w-md w-full bg-background">
            <div className="p-4">sdfsdf</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
