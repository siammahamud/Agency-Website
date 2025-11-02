import React from "react";
import { PiGearFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { IoMdCloudOutline } from "react-icons/io";
import HeadingSection from "../../components/HeadingSection";
const ToolsSection = () => {
  const tools = [
    {
      icon: PiGearFill,
      title: "Customizable Setting ",
      description: "Easily configure tools to fit your project requirements",
    },
    {
      icon: FaCode,
      title: "Customizable Setting ",
      description: "Easily configure tools to fit your project requirements",
    },
    {
      icon: FiSmartphone,
      title: "Customizable Setting ",
      description: "Easily configure tools to fit your project requirements",
    },
    {
      icon: IoMdCloudOutline,
      title: "Customizable Setting ",
      description: "Easily configure tools to fit your project requirements",
    },
  ];

  return (
    <div className="max-w-screen-2xl px-5 py-20 mx-auto">
      {/* heading  */}
      <HeadingSection
        subheading={"The tools you need"}
        heading={"All-in-One Solution For Your Projects"}
      />
      {/* tools grid  */}
      <div className="card-grid-layout mb-20">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
          // <div
          //   key={index}
          //   className="flex flex-col items-center shadow-lg py-8 px-4 text-center rounded-lg hover:shadow-3xl hover:shadow-primary-clr transition-shadow duration-300"
          // >
          //   <tool.icon className="text-4xl text-primary-clr mb-4" />
          //   <h2 className="text-2xl font-semibold mb-4">{tool.title}</h2>
          //   <p className="text-gray-600">{tool.description}</p>
          // </div>
        ))}
      </div>
      {/* button  */}
      <div>
        <button className="bg-primary-clr font-semibold hover:bg-priamary-clr-dark text-white px-6 py-3 rounded-lg hover:bg-primary-clr-dark transition-colors duration-300 mx-auto block">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ToolsSection;
