import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function Talents() {
  const talents = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "I develop responsive and dynamic websites.",
      icon: <FaLaptopCode className="text-[#EDE5D8] lg:text-5xl text-4xl" />,
    },
    {
      id: 2,
      title: "WEB DESIGN",
      description:
        " I design intuitive and engaging user interfaces that create seamless experiences.",
      icon: <IoLogoFigma className="text-[#EDE5D8] lg:text-5xl text-4xl" />,
    },
    {
      id: 3,
      title: "TECHNICAL SUPPORT",
      description:
        "I offer dependable technical support, troubleshooting and resolving issues to keep your systems and devices functioning smoothly.",
      icon: <MdSupportAgent className="text-[#EDE5D8] lg:text-5xl text-4xl" />,
    },
    {
      id: 4,
      title: "USER RESEARCH",
      description:
        "I transform crucial user insights into actionable improvements through targeted research, driven by a dedication to user satisfaction.",
      icon: <FaSearch className="text-[#EDE5D8] lg:text-5xl text-4xl" />,
    },
  ];

  return (
    <div>
      <div className="bg-[#314933] mr-8 ml-8 max-w-screen-xl rounded-lg">
        <div className="flex justify-center">
          <h1 className=" mt-8 font-bold text-2xl md:text-3xl text-[#EDE5D8] underline decoration-8 decoration-[#F2A615] underline-offset-4">
            Talents
          </h1>
        </div>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 mt-10 pb-20 place-items-center">
        {talents.map((talent) => (
          <div className="w-full max-w-sm bg-none border-2 border-[#EDE5D8] rounded-sm" key={talent.id}>
            
              <div className="flex flex-col items-center">
                <div className="border-2 border-[#F65B36]  mt-6 px-4 py-2">
                  {talent.icon}
                </div>
                <h1 className="font-bold lg:text-2xl text-[#EDE5D8] mt-4 hover:text-[#F2A615]">
                  {talent.title}
                </h1>
                <p className="font-light text-xs text-[#EDE5D8] mt-4 text-center mb-4 ml-2 mr-2 hover:scale-105">
                  {talent.description}
                </p>
              </div>
            
          </div>
          ))}
        </div>
    
      </div>
    </div>
  );
}
