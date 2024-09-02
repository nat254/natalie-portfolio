import React from "react";
import SolidButton from "./SolidButton";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#314933] mt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="flex items-center mb-0 md:mb-4 space-x-3 rtl:space-x-reverse text-[#EDE5D8] text-xl">
            Interested in working with me?
          </h1>
          <div className="mb-2">
            <SolidButton>Contact Me</SolidButton>
          </div>
        </div>
        <hr className="my-6 border-[#F2A615] sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-between pb-1">
          <div className="flex gap-2">
            <Link href="https://www.linkedin.com/in/natalie-ndetei-3959bb1a6/">
              <FaLinkedin className="text-[#EDE5D8]" />
            </Link>
            <Link href="https://github.com/nat254">
              <IoLogoGithub className="text-[#EDE5D8] " />
            </Link>
          </div>
          <div>
            <span className="block text-xs text-[#EDE5D8] sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Natalie™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
