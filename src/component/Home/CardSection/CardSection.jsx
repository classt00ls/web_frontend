import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";

const CardSection = () => {
  const [sliders, setSliders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await axios.get(`${BaseUrl}/home-content`);
        const response = await axios.get("/homeContent.json");
        setSliders(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch sliders");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const itemsPerPage = 3;

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? sliders.sliders.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.sliders.length - itemsPerPage
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="container mx-auto">
      <div className="mb-20 mt-20">
        <div className="flex justify-evenly md:justify-between md:mx-20 ">
          <h1 className="md:text-[27px] font-bold  ">{sliders.main_message}</h1>
          <div className="flex items-center hover:text-orange-500 gap-2 ">
            <Link to="/" className=" ">
              View all
            </Link>
            <FaArrowRight className="text-gray-700 hover:text-orange-500 text-1xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center">
          {sliders.sliders
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((slider, index) => (
              <Link to={slider.link} key={index} className="mt-10 w-[385px]">
                <img src={slider.image} alt={slider.title} />
                <div className="text-[18px] my-2">{slider.title}</div>
                <h3 className="text-[15px] font-semibold text-gray-700">
                  {slider.description}
                </h3>
              </Link>
            ))}
        </div>
        <div className="flex justify-center mt-5 items-center">
          <div className="flex space-x-4">
            <button
              onClick={handlePrevSlide}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg"
            >
              <FaArrowLeft className="text-gray-800" />
            </button>
            <button
              onClick={handleNextSlide}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg"
            >
              <FaArrowRight className="text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
