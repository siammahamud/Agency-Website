import React from "react";
import HeadingSection from "../../components/HeadingSection";
import {
  FaCalendarAlt,
  FaRegClock,
  FaHeartbeat,
  FaTruckMoving,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: FaCalendarAlt,
      description:
        "Our intelligent scheduling system allows you to plan, manage, and coordinate projects or appointments effortlessly. With automated reminders, flexible time slots, and seamless synchronization across devices, you’ll never miss an important task or deadline again.",
    },
    {
      id: 2,
      icon: FaRegClock,
      description:
        "Experience precision timing with real-time monitoring and optimized scheduling. Our system tracks every process from initiation to completion, providing detailed insights into performance and efficiency.",
    },
    {
      id: 3,
      icon: FaHeartbeat,
      description:
        "Reliability is at the heart of everything we do. Our infrastructure constantly monitors system performance, ensuring stability, speed, and security. Whether it’s server uptime, process tracking, or service response.",
    },
    {
      id: 4,
      icon: FaTruckMoving,
      description:
        "From production to delivery, our logistics solutions ensure smooth, efficient, and transparent transportation. Real-time tracking, route optimization, and automated updates keep you and your customers informed every step of the way.",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* heading section  */}
        <HeadingSection
          subheading="Services"
          heading="Explore Our range of Professional services tailored to  meet your business needs"
          description="We offer a wide range of services to help your business thrive
        in the digital age. Our team of experts is dedicated to providing
        top-notch solutions that drive results and foster growth. Whether
        you're looking to enhance your online presence, streamline your
        operations, or develop innovative products, we have the expertise to
        make it happen."
        />

        {/* services card grid  */}

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center shadow-lg py-8 px-6 md:px-10 text-center rounded-lg hover:shadow-3xl hover:shadow-primary-clr transition-shadow duration-300"
            >
              <service.icon className="text-4xl text-primary-clr mb-6" />
              <p className="text-gray-600 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* button  */}
        <div className="mb-20">
          <button className="bg-primary-clr font-semibold hover:bg-priamary-clr-dark text-white px-6 py-3 rounded-lg hover:bg-primary-clr-dark transition-colors duration-300 mx-auto block">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
