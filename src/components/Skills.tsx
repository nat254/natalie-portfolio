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
      icon: <FaHtml5 className="text-7xl" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <IoLogoCss3 className="text-7xl" />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs className="text-7xl" />,
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact className="text-7xl" />,
    },
    {
      id: 5,
      name: "Next.js",
      icon: <RiNextjsFill className="text-7xl" />,
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-7xl" />,
    },
    {
      id: 7,
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-7xl" />,
    },
    {
      id: 8,
      name: "Supabase",
      icon: <RiSupabaseFill className="text-7xl" />,
    },
    {
      id: 9,
      name: "Firebase",
      icon: <IoLogoFirebase className="text-7xl" />,
    },
    {
      id: 10,
      name: "MySQL",
      icon: <DiMysql className="text-7xl" />,
    },
    {
      id: 11,
      name: "Python",
      icon: <FaPython className="text-7xl" />,
    },
    {
      id: 12,
      name: "Bootstrap",
      icon: <FaBootstrap className="text-7xl" />,
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
                <div className="p-5">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 bg-[#EDE5D8] rounded-lg hover:border-4 border-[#F2A615]">
                      {skill.icon}
                    </CardContent>
                  </Card>
                  <div className="mt-2 text-center text-xl font-semibold text-[#EDE5D8] hover:text-yellow-500">
                    {skill.name}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
