import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./slider.css";

import sliderImage1 from "/src/assets/slider/Rectangle 13.png";

const Sliders = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Slide every 5 seconds
    customPaging: () => (
      <div className="custom-dot">
        <span className="dot"></span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      image: sliderImage1,
      title: "Event 01 IA",
      category: "Event",
      generateLink: "/audio-generator",
    },
    {
      image: sliderImage1,
      title: "Conferencias IA",
      category: "Conferences",
      generateLink: "/audio-generator",
    },
    {
      image: sliderImage1,
      title: "Football match",
      category: "Sports",
      generateLink: "/audio-generator",
    },
    {
      image: sliderImage1,
      title: "Football match",
      category: "Sports",
      generateLink: "/audio-generator",
    },
  ];

  return (
    <div>
      <div className="py-8 my-20 overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2">
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-4 flex justify-between items-center">
                  <span className="text-lg font-bold">{slide.title}</span>
                  <Link
                    to={slide.generateLink}
                    className="bg-orange-500 text-white py-1 px-4 rounded-full flex items-center"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {hoveredIndex === index
                      ? "Audio Generator"
                      : slide.category}
                    <FaHeart className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
