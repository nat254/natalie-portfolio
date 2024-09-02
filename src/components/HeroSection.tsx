import React from "react";
import SolidButton from "./SolidButton";
import OutlinedButton from "./OutlinedButton";
import Image from "next/image";
import HeroImage from "../../public/Coding-cuate.png"

export default function HeroSection() {
  return (
    <div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 -mt-5">
        <div className=" mr-auto ml-6 place-self-center lg:col-span-7 mt-8">
          <h1 className="max-w-2xl mb-2 text-3xl font-bold tracking-tight leading-none lg:text-xl xl:text-4xl">
            Hii,
          </h1>
          <h1 className="max-w-2xl mb-2 text-2xl tracking-wide lg:text-2xl">
            My name is{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F2A615] from-[#F65B36]">
              Natalie Ngina.
            </span>
          </h1>
          <h1 className="max-w-2xl mb-2 text-2xl tracking-normal lg:text-2xl">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F2A615] from-[#314933]">
              FRONT-END DEVELOPER
            </span>{" "}
            |{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#F2A615] from-[#314933]">
              UI/UX DESIGNER
            </span>
          </h1>
          <p className="max-w-2xl mb-4 font-light lg:mb-8 lg:text-lg">
            I am passionate about creating dynamic and visually appealing web
            applications.
          </p>
          <div className="flex flex-wrap gap-8">
            <SolidButton>My Work</SolidButton>
            <OutlinedButton>Hire Me</OutlinedButton>
          </div>
        </div>
        <div className="hidden lg:-mt-3 lg:col-span-5 lg:flex lg:ml-10">
            <Image
            src={HeroImage}
            width={420}
            height={420} 
            alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
