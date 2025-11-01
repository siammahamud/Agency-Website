import React from "react";

const HeadingSection = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-20">
      <p className="font-semibold text-lg lg:text-xl text-primary-clr my-3">
        {subheading}
      </p>
      <h1 className="text-2xl  lg:text-3xl font-bold text-gray-800 mb-4">
        {heading}
      </h1>
      {description && <p className="text-gray-700 mb-16">{description}</p>}
    </div>
  );
};

export default HeadingSection;
