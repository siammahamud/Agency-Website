import React from "react";

const ToolCard = ({ tool }) => {
  return (
    <div className="flex flex-col items-center shadow-lg py-8 px-4 text-center rounded-lg hover:shadow-3xl hover:shadow-primary-clr transition-shadow duration-300">
      <tool.icon className="text-4xl text-primary-clr mb-4" />
      <h2 className="text-2xl font-semibold mb-4">{tool.title}</h2>
      <p className="text-gray-600">{tool.description}</p>
    </div>
  );
};

export default ToolCard;
