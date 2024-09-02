import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 className="md:text-7xl text-3xl" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <IoLogoCss3 className="md:text-7xl text-3xl" />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs className="md:text-7xl text-3xl" />,
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact className="md:text-7xl text-3xl" />,
    },
    {
      id: 5,
      name: "Next.js",
      icon: <RiNextjsFill className="md:text-7xl text-3xl" />,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="md:text-7xl text-3xl" />,
    },
    {
      id: 7,
      name: "TypeScript",
      icon: <BiLogoTypescript className="md:text-7xl text-3xl" />,
    },
    {
      id: 8,
      name: "Supabase",
      icon: <RiSupabaseFill className="md:text-7xl text-3xl" />,
    },
    {
      id: 9,
      name: "Firebase",
      icon: <IoLogoFirebase className="md:text-7xl text-3xl" />,
    },
    {
      id: 10,
      name: "MySQL",
      icon: <DiMysql className="md:text-7xl text-3xl" />,
    },
    {
      id: 11,
      name: "Python",
      icon: <FaPython className="md:text-7xl text-3xl" />,
    },
    {
      id: 12,
      name: "Bootstrap",
      icon: <FaBootstrap className="md:text-7xl text-3xl" />,
    },
  ];

  return (
    <div className="bg-[#314933] mr-8 ml-8 max-w-screen-xl rounded-lg mt-10">
      <div className="flex justify-center">
        <h1 className="mt-8 font-bold text-2xl md:text-3xl text-[#EDE5D8] underline decoration-8 decoration-[#F2A615] underline-offset-4">
          Skills
        </h1>
      </div>

      <div className="flex justify-center mt-8 pb-10 ml-12 mr-12 px-6">
        <Carousel
          opts={{
            align: "start",
            
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {skills.map((skill) => (
              <CarouselItem key={skill.id} className="md:basis-1/5 basis-1/2">
                <div className="flex flex-col items-center p-4">
                  <Card className="w-[4rem] h-[4rem] md:w-[10rem] md:h-[6.5rem] md:mb-2">
                    <CardContent className="flex flex-col items-center p-4 bg-[#EDE5D8] rounded-lg hover:border-4 border-[#F2A615]">
                      {skill.icon}
                    </CardContent>
                  </Card>
                  <div className="mt-2 text-center text-sm md:text-xl font-semibold text-[#EDE5D8] hover:text-yellow-500">
                    {skill.name}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute md:left-[-3rem] left-[-2rem] top-[35%] -translate-y-1/2 lg:top-[45%]" />
          <CarouselNext className="absolute md:right-[-3rem] right-[-3rem] top-[35%] -translate-y-1/2 lg:top-[45%]" />
        </Carousel>
      </div>
    </div>
  );
}
