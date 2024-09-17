import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import leftImage from "/src/assets/Section-4/Rectangle 12.png"; // Assume this is your first image

// Add additional images here if you have more
const slides = [
  {
    image: leftImage,
    title: "Podcast IA 2024",
    location: "Ollenhauer Str. 29, 10118, Berlin",
    price: 1000,
    link: "/",
    description:
      "Category: Entertainment, Home page; Price: 1,000; Distance: 1.4 km from center; Subcategory: Commercial, Land; Amenities: Parking, Pet Friendly, Restaurant, Spa lounge, Swimming pool; Room Facilities: Heating, Laundry Service; Vendor: Annette Black.",
  },
  {
    image: leftImage,
    title: "Podcast IA 2025",
    location: "New address add here",
    price: 5000,
    link: "/",
    description:
      "Category: Entertainment, Home page; Price: 1,000; Distance: 1.4 km from center; Subcategory: Commercial, Land; Amenities: Parking, Pet Friendly, Restaurant, Spa lounge, Swimming pool; Room Facilities: Heating, Laundry Service; Vendor: Annette Black.",
  },
  // Add more slides here with similar structure if needed
];

const Section4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const { image, title, location, price, description, link } =
    slides[currentSlide];

  return (
    <div className="mt-10">
      <div className="flex justify-evenly md:justify-between  md:mx-48">
        <h1 className="md:text-[27px] font-bold">
          Construye tu camino con las herramientas de IA
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={handlePrevSlide}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg"
          >
            <FaArrowLeft className="text-gray-800" />
          </button>
          <button
            onClick={handleNextSlide}
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg"
          >
            <FaArrowRight className="text-gray-800" />
          </button>
        </div>
      </div>
      <div className="mt-10 md:flex justify-center gap-10">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <div className="max-w-md lg:p-0 md:p-0 p-10">
            <h2 className="text-[22px] font-bold mb-2">{title}</h2>
            <div className="flex items-center text-gray-600 mb-1">
              <FaMapMarkerAlt className="mr-2" />
              <span className="text-[14px]">{location}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaWallet className="mr-2" />
              <span>{price}</span>
            </div>
            <p className="text-gray-600 text-[14px] mb-4">{description}</p>
            <Link
              to={link}
              className="bg-orange-500 text-white px-4 py-2 w-36 rounded-full flex items-center"
            >
              View more <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
