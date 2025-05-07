"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedin, FaInstagram, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import Link from "next/link";

const founders = [
  {
    name: "Redif Ekinci",
    title: "CEO & Founder",
    image: "/Founders/RedifEkinci.png",
    linkedin: "https://www.linkedin.com/in/redifekinci/",
    instagram: "https://www.instagram.com/redifekinci/",
    github: "",
    desc: "Builder of platforms that actually scale. Strategic operator with a product obsession."
  },
  {
    name: "Abdullah Artem",
    title: "Chief Marketing Officer",
    image: "/Founders/AbdullahArtem.png",
    linkedin: "https://www.linkedin.com/in/abdullahartem/",
    instagram: "https://www.instagram.com/abdullahartem/",
    github: "",
    desc: "Brand architect. Growth strategist. Makes complex products feel like lifestyle brands."
  },
  {
    name: "Abdulrahman Dergham",
    title: "Chief Product Officer",
    image: "/Founders/AbdulrahmanDergham.png",
    linkedin: "https://www.linkedin.com/in/abdulrahmandergham/",
    instagram: "",
    github: "https://github.com/abdulrahmandergham",
    desc: "The future belongs to those who automate. Not just processes, but progress. As a product leader, our job isn’t to follow innovation—it’s to architect it."
  },
  {
    name: "Hassan Farooq",
    title: "CTO",
    image: "/Founders/HassanFarooq.png",
    linkedin: "https://www.linkedin.com/in/hassanfarooq/",
    instagram: "",
    github: "https://github.com/hassanfarooq",
    desc: "AI won’t take your job. But it will crush your pipeline, hallucinate at scale, and still get more budget than you."
  },
];

export default function Founders() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
        <h2 className="text-center text-lg md:text-xl font-extralight text-gray-500 mb-4">
          The Founders Behind the Platform the Market Was Missing.
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
          We didn’t build this to chase trends. We built it because nothing else worked the way we needed.<br />
          Now it’s yours to use — and scale with.
        </h3>
        <div className="relative flex items-center">
          <button className="founder-swiper-prev absolute left-[-10px] top-1/2 -translate-y-1/2 z-20 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-md hover:scale-110 transition xl:hidden">
            <FaChevronLeft />
          </button>
          <Swiper
            spaceBetween={8}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: '.founder-swiper-next',
              prevEl: '.founder-swiper-prev',
            }}
          >
            {founders.map((founder, idx) => (
              <SwiperSlide key={idx} className="flex flex-col items-start justify-end mx-0">
                <div
                  className="flex flex-col justify-between w-64 h-72 md:w-[200px] md:h-80 rounded-2xl border border-[#23252C] shadow-xl relative mx-auto bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${founder.image})` }}
                >
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black/90 to-transparent z-0"></div>
                  {/* Social Icons */}
                  <div className="absolute top-3 left-3 z-10 flex gap-2 ">
                    {founder.linkedin && (
                      <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white hover:text-white p-2 rounded-lg transition cursor-pointer">
                        <FaLinkedin size={16} />
                      </Link>
                    )}
                    {founder.instagram && (
                      <Link href={founder.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white hover:text-white p-2 rounded-lg transition cursor-pointer">
                        <FaInstagram size={16} />
                      </Link>
                    )}
                    {founder.github && (
                      <Link href={founder.github} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white hover:text-white p-2 rounded-lg transition cursor-pointer">
                        <FaGithub size={16} />
                      </Link>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-end z-10 p-2 md:p-2 pb-4 md:pb-6">
                    <div className="text-white text-[18px] text-nowrap font-light mb-1 drop-shadow-lg">{founder.name}</div>
                    <div className="text-sm text-gray-300 font-extralight mb-2 drop-shadow">{founder.title}</div>
                  </div>
                </div>
                {/* Her kartın kendi açıklama alanı */}
                <div className="w-full mt-3">
                  <div className="text-xs text-gray-300 font-light text-center min-h-[32px] w-full max-w-[16rem] md:max-w-[18rem] mx-auto">
                    {founder.desc}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="founder-swiper-next absolute right-[-10px] top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-md hover:scale-110 transition xl:hidden">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}