import React, { useState } from "react";
import parse from 'html-react-parser';
import price from "../../../../src/assets/classtools_web_design/card_logo.png";
import globeLogo from "../../../assets/classtools_web_design/Globe.png";
import shareLogo from "../../../../src/assets/classtools_web_design/share_logo.png";
import ytLogo from "../../../../src/assets/classtools_web_design/yt_logo2.png";
import xLogo from "../../../../src/assets/classtools_web_design/x_logo.png";
import linkLogo from "../../../../src/assets/classtools_web_design/linkedin_logo.png";
import ReviewLogo from "../../../../src/assets/classtools_web_design/star_logo.png";
import YTLogo from "../../../../src/assets/classtools_web_design/Group 262.png";
import { useTranslation } from "react-i18next";

// Importar Montserrat
import '@fontsource/montserrat';

const ProductDescription = ({ stars, pricing, title, url, description, video_url, features }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateDescription = (text) => {
    if (typeof text !== 'string') return text;
    if (text.length <= 500) return text;
    return text.substring(0, 500) + '...';
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <h6 className="text-[12px] sm:text-[14px]">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="mx-1">{">"}</span>
          <a href="/tools" className="hover:underline">
            Listings
          </a>
          <span className="mx-1">{">"}</span>
          <a
            className="text-orange-500 hover:underline"
            href="#"
          >
            {title}
          </a>
        </h6>
      </div>

      {/* Title and Share Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4">
          <h1 className="text-black font-bold text-[28px] md:text-[36px]">
            {title}
          </h1>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black rounded-full p-1 hover:border border-orange-700"
              >
                <img src={shareLogo} alt="Compartir" className="h-4" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 hover:border border-orange-700">
                      <a
                        href={`https://www.youtube.com/share?url=${encodeURIComponent(url)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <img src={ytLogo} alt="YouTube" className="h-4" />
                        <span className="text-black">YouTube</span>
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 hover:border border-orange-700">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <img src={xLogo} alt="Twitter" className="h-4" />
                        <span className="text-black">Twitter</span>
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 hover:border border-orange-700">
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <img src={linkLogo} alt="LinkedIn" className="h-4" />
                        <span className="text-black">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rating and Price Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-5">
        <p className="flex flex-col md:flex-row md:space-x-4 text-[16px] md:text-[18px]">
          <span id="review-count" className="flex items-center space-x-2">
            <img src={ReviewLogo} alt="review-icon" className="h-4" />
            <span className="text-[14px]">{stars} (0 Reviews)</span>
          </span>
          <span id="price" className="flex items-center space-x-2 mt-2 md:mt-0 ml-0 md:ml-4">
            <img src={price} alt="price-icon" className="h-8" />
            <span className="text-[14px]">{pricing}</span>
          </span>
        </p>
      </div>

      {/* Main Content Section */}
      <section className="mt-5">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Left Side - Description */}
          <div className="w-full md:w-2/3 pr-0 md:pr-20">
            <div className="w-full">
              <div className="flex items-center justify-center md:justify-start mb-8">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${url.split('/?')[0]}&sz=256`} 
                  alt={title} 
                  className="w-[200px] h-[200px] rounded-lg" 
                />
              </div>
              
              {!isExpanded ? (
                <div>
                  {typeof description === "string" ? (
                    <div className="text-[#1F1B2DBA] text-[17px] font-montserrat leading-relaxed">
                      {parse(truncateDescription(description) || '')}
                    </div>
                  ) : (
                    <div className="text-[#1F1B2DBA] text-[17px] font-montserrat leading-relaxed">
                      {truncateDescription(description)}
                    </div>
                  )}
                  {description && description.length > 500 && (
                    <div className="text-orange-500 mt-4">
                      <button
                        onClick={handleToggle}
                        className="text-[14px] md:text-[16px] font-montserrat"
                      >
                        Leer más
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-[#1F1B2DBA] text-[17px] font-montserrat leading-relaxed">
                    {typeof description === "string" ? parse(description || '') : description}
                  </div>
                  <div className="text-orange-500 mt-4">
                    <button
                      onClick={handleToggle}
                      className="text-[14px] md:text-[16px] font-montserrat"
                    >
                      Leer menos
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Info Card */}
          <div className="md:w-[400px] mt-3 md:mt-0">
            <div className="p-4 rounded-3xl">
              <div className="bg-white p-6 rounded-2xl border-2">
                <h1 className="text-black font-bold text-[20px] pt-5">
                  {title}
                </h1>
                <hr className="border-t-2 border-gray-300 my-5" />
                <ul className="text-[15px] md:text-[18px] text-gray-500">
                  <li className="flex items-center my-2">
                    <img className="w-[15px] mr-2" src={globeLogo} alt="" />
                    <a 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[15px] text-orange-500 hover:underline"
                    >
                      {url}
                    </a>
                  </li>
                </ul>
                <hr className="border-t-2 border-gray-300 my-5" />
                <p className="font-bold text-black text-[20px] mb-5">
                  {pricing}
                </p>
                {video_url && (
                  <div className="relative w-full pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={video_url}
                      title={`Video de ${title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and How to Use Section */}
      <section className="mt-16">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Features */}
          <div className="w-full md:w-1/2 md:pr-20">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-black font-bold text-[24px] mb-6 flex items-center">
                <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
                {t('product.main_features', { title })}
              </h2>
              <div className="text-[17px] font-montserrat leading-relaxed text-[#1F1B2DBA] prose prose-headings:text-orange-500 prose-strong:text-orange-500">
                {parse(features || '')}
              </div>
            </div>
          </div>

          {/* Right Side - How to Use */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-black font-bold text-[24px] mb-6 flex items-center">
                <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
                {t('product.how_to_use', { title })}
              </h2>
              
              {video_url && (
                <div className="flex items-center mt-4 mb-6 text-[15px]">
                  <img
                    className="w-[20px] h-[13px]"
                    src={YTLogo}
                    alt="youtube-icon"
                  />
                  <a
                    href={video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-blue-500 hover:underline"
                  >
                    Ver tutorial en YouTube
                  </a>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="text-[15px] font-montserrat space-y-4">
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-sm">1</span>
                    <p>Elige una plantilla</p>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-sm">2</span>
                    <p>Añade tus entradas</p>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 text-sm">3</span>
                    <p>Ve la salida</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDescription; 