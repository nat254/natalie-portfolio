import { useState } from "react";
import { FaLink } from "react-icons/fa";
import React from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const items = [
    {
      id: 1,
      category: "development",
      src: "/avechi.PNG",
      link: "https://github.com/nat254/ecommerce",
      title: "Avechi - Electronics Ecommerce Website",
      description: "This is a revamp of the original Avechi website allowing users to view latest electronics, order them, and view history of orders and payments.",
      languages: ["HTML","Bootstrap","JavaScript","PHP","MySQL"],
    },
    {
      id: 2,
      category: "design",
      src: "/cupcake_portf.PNG",
      link: "https://www.figma.com/design/crCsqwnIguaFY9j1y49p6W/Untitled?node-id=0-1&t=Br1XZc01B2qCbQ4z-1",
      title: "Cupcake - Ecommerce Hero Section",
      description: "This is the design of a hero section for a cupcake ecommerce website.",
      languages: ["Figma","Freepik"],
    },
    {
      id: 3,
      category: "development",
      src: "/chakura.PNG",
      link: "https://github.com/nat254/ecommerce-food",
      title: "Chakura - Food Ecommerce Website",
      description: "This is an ecommerce project that enables users to order food online, and check history of payments and orders.",
      languages: ["HTML","CSS","JavaScript","PHP","MySQL"],
    },
    {
      id: 4,
      category: "design",
      src: "/new_portf.PNG",
      link: "https://www.figma.com/design/gbkzSWEMsfPo3Qq3oc7BgC/Untitled?node-id=1-8&t=lft0aspMtVjVT6BP-1",
      title: "Portfolio Website Design",
      description: "This is the design of this portfolio website.",
      languages: ["Figma","Freepik","SVG  Icons"],
    },
    {
      id: 5,
      category: "development",
      src: "/pcos.PNG",
      link: "https://github.com/nat254/pcosDetect",
      title: "PCOS Detection System",
      description: "This is a project that uses machine learning to help health practitioners detect the possibility of PCOS in patients.",
      languages: ["HTML","Bootstrap","JavaScript","PHP","MySQL","Python","Flask","Catboost"],
    },
    {
      id: 6,
      category: "design",
      src: "/triumf.PNG",
      link: "confidential",
      title: "TriumfLand Saga - Flight minigame",
      description: "This is the design of a flight educational minigame that teaches children how to navigate their emotions.",
      languages: ["Figma", "Freepik", "Blender", "Unity", "Gimp"],
    },
    {
      id: 7,
      category: "development",
      src: "/eesti.PNG",
      link: "eesti-explorer.vercel.app",
      title: "Eesti Explorer - Travel Website",
      description: "This is a website that allows users to view tourist destinations in Estonia, book tours from various tourguides, and make payments via stripe.",
      languages: ["Nextjs","Tailwindcss","Shadcn UI","Supabase","Stripe","Vercel"],
    },
    {
      id: 8,
      category: "design",
      src: "/gichohi.PNG",
      link: "https://www.figma.com/design/eJE7at6PrEGwvndYzSJGKx/H.W-Gichohi?node-id=1-2&t=4BlMcHNslkANp9eG-1",
      title: "H.W Gichohi - Audit Company Informational Website",
      description: "This is the design of an informational website for an audit company describing the services they offer and how to contact them.",
      languages: ["Figma","Freepik","SVG Icons","AI face generator"],
    },
    {
      id: 9,
      category: "development",
      src: "/portf_image.PNG",
      link: "https://example.com/Development3",
      title: "Portfolio Website - Trial",
      description: "This is a trial portfolio website that I created to test my skills in web development.",
      languages: ["HTML","CSS","JavaScript"],
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="mr-8 ml-8 max-w-screen-xl">
      <div className="flex justify-center mt-8">
        <h1 className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-[#F2A615] from-[#F65B36] font-bold text-2xl md:text-3xl underline decoration-8 decoration-[#314933] underline-offset-4">
          Projects
        </h1>
      </div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap mt-4">
        <button
          type="button"
          className={`filter-btn rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-black hover:bg-[#EDE5D8] hover:border-2 border-[#F2A615] ${
            selectedCategory === "all"
              ? "bg-[#F65B36] text-[#EDE5D8]"
              : "bg-[#F2A615] text-[#EDE5D8]"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`filter-btn rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-black hover:bg-[#EDE5D8] hover:border-2 border-[#F2A615] ${
            selectedCategory === "development"
              ? "bg-[#F65B36] text-[#EDE5D8]"
              : "bg-[#F2A615] text-[#EDE5D8]"
          }`}
          onClick={() => setSelectedCategory("development")}
        >
          Development
        </button>
        <button
          type="button"
          className={`filter-btn rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-black hover:bg-[#EDE5D8] hover:border-2 border-[#F2A615] ${
            selectedCategory === "design"
              ? "bg-[#F65B36] text-[#EDE5D8]"
              : "bg-[#F2A615] text-[#EDE5D8]"
          }`}
          onClick={() => setSelectedCategory("design")}
        >
          Design
        </button>
        
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
         
          <div className="max-w-sm bg-white border border-gray-300 shadow rounded-lg" key={item.id}>
            <div className="filter-item relative group">
              <Image
                className="h-auto max-w-full object-cover rounded-t-lg"
                src={item.src}
                alt=""
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              >
                <FaLink className="text-white text-3xl" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{item.title}</h5>
              <p className="text-sm font-normal text-gray-700">{item.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-start px-5 pb-5">
              {item.languages.map((language, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-[#F65B36] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
