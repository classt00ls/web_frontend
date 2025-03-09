import React from "react";
import ReviewLogo from "../../../../src/assets/classtools_web_design/star_logo.png";
import price from "../../../../src/assets/classtools_web_design/card_logo.png";

const Product_section_3 = ({stars, pricing}) => {
  return (
    <section className="">
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

      {/* Sistema de pestañas comentado
      <div className="flex flex-wrap space-x-4 py-5 text-[18px] md:text-[21px]">
        <div className="px-4 rounded-full bg-[#d4d2d2] hover:bg-[#a5a4a4] flex items-center cursor-pointer">
          <img src={galleryLogo} alt="gallery-logo" className="w-[16px] h-[16px] mr-2" />
          <p className="text-[14px] font-semibold">Gallery</p>
        </div>
        <div className="px-4 rounded-full bg-white border border-3 text-red-600 flex items-center cursor-pointer">
          <img src={Info} alt="info-logo" className="w-[16px] h-[16px] mr-2" />
          <p className="text-[14px] font-semibold">Info</p>
        </div>
        <div className="px-4 rounded-full bg-[#d4d2d2] hover:bg-[#a5a4a4] flex items-center cursor-pointer">
          <img src={Review} alt="review-logo" className="w-[16px] h-[16px] mr-2" />
          <p className="text-[14px] font-semibold">Review</p>
        </div>
      </div>
      */}
    </section>
  );
};

export default Product_section_3;
