import React from "react";
import HeadingSection from "../../components/HeadingSection";
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
const CompanyLogos = () => {
  const logos = [
    {
      icon: FaApple,
      name: "Apple",
    },
    {
      icon: FaGoogle,
      name: "FaGoogle",
    },
    {
      icon: FaMicrosoft,
      name: "FaMicrosoft",
    },
    {
      icon: FaAmazon,
      name: "FaAmazon",
    },
    {
      icon: FaFacebook,
      name: "FaFacebook",
    },
    {
      icon: FaInstagram,
      name: "FaInstagram",
    },
  ];
  return (
    <div className="bg-bg">
      <div className="container max-w-screen-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <HeadingSection
          subheading="Our trusted partners"
          heading="Companies We've Worked With"
          description="We have collaborated with a diverse range of companies, delivering exceptional results and building lasting partnerships."
        />
        {/* logo container  */}
        <div className="overflow-hidden border-y-2 border-gray-200 py-5">
          <div className=" flex gap-5 lg:gap-14 justify-around items-center animate-scroll n">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="size-24 bg-white flex justify-center items-center rounded-full group"
              >
                <logo.icon
                  className="text-4xl text-primary-clr group-hover:scale-150 transition-transform duration-300"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
