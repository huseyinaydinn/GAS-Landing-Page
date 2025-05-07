"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedin, FaInstagram, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";

const founders = [
  {
    name: "Redif Ekinci",
    title: "CEO & Founder",
    image: "/Founders/RedifEkinci.jpg",
    linkedin: "https://www.linkedin.com/in/redifekinci/",
    instagram: "https://www.instagram.com/redifekinci/",
    github: "",
    desc: "Builder of platforms that actually scale. Strategic operator with a product obsession."
  },
  {
    name: "Abdullah Artem",
    title: "Chief Marketing Officer",
    image: "/Founders/AbdullahArtem.jpg",
    linkedin: "https://www.linkedin.com/in/abdullahartem/",
    instagram: "https://www.instagram.com/abdullahartem/",
    github: "",
    desc: "Brand architect. Growth strategist. Makes complex products feel like lifestyle brands."
  },
  {
    name: "Abdulrahman Dergham",
    title: "Chief Product Officer",
    image: "/Founders/AbdulrahmanDergham.jpg",
    linkedin: "https://www.linkedin.com/in/abdulrahmandergham/",
    instagram: "",
    github: "https://github.com/abdulrahmandergham",
    desc: "The future belongs to those who automate. Not just processes, but progress. As a product leader, our job isn’t to follow innovation—it’s to architect it."
  },
  {
    name: "Hassan Farooq",
    title: "CTO",
    image: "/Founders/HassanFarooq.jpg",
    linkedin: "https://www.linkedin.com/in/hassanfarooq/",
    instagram: "",
    github: "https://github.com/hassanfarooq",
    desc: "AI won’t take your job. But it will crush your pipeline, hallucinate at scale, and still get more budget than you." 
  },
];

export default function Founders() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl font-light text-gray-200 mb-4">
          The Founders Behind the Platform the Market Was Missing.
        </h2>
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-10 text-blue-200">
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
                  {/* Social Icons */}
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    {founder.linkedin && (
                      <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-500 text-blue-400 hover:text-white p-2 rounded-lg transition">
                        <FaLinkedin size={16} />
                      </a>
                    )}
                    {founder.instagram && (
                      <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-pink-500 text-pink-400 hover:text-white p-2 rounded-lg transition">
                        <FaInstagram size={16} />
                      </a>
                    )}
                    {founder.github && (
                      <a href={founder.github} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-gray-800 text-gray-300 hover:text-white p-2 rounded-lg transition">
                        <FaGithub size={16} />
                      </a>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-end z-10 p-4 md:p-6">
                    <div className="text-white text-[16px] font-semibold mb-1 drop-shadow-lg">{founder.name}</div>
                    <div className="text-xs text-blue-200 font-light mb-2 drop-shadow">{founder.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="founder-swiper-next absolute right-[-10px] top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-md hover:scale-110 transition xl:hidden">
          <FaChevronRight /> 
          </button>
        </div>
        {/* Desc kutusu Swiper'ın altında ve ortalanmış */}
        <div className="flex justify-center items-center mt-6">
          {/* Aktif founder'ın desc'i burada gösterilecek (JS ile) */}
          {/* Bunu ileride state ile bağlayabiliriz, şimdilik örnek olarak ilk founder'ın desc'i */}
          <div className="text-xs text-gray-300 font-light text-center min-h-[32px] w-full max-w-[16rem] md:max-w-[18rem]">
            {founders[0].desc}
          </div>
        </div>
      </div>
    </section>
  );
}