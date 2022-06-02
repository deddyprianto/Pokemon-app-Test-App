import React from "react";

const Banner = ({ information, detailInformation, backgroundBanner }) => {
  return (
    <div className={`px-4 py-5 sm:px-6 ${backgroundBanner}`}>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        {information}
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        {detailInformation}
      </p>
    </div>
  );
};

export default Banner;
