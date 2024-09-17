import galleryLogo from "../../../../src/assets/classtools_web_design/gallery_logo.png";
import Info from "../../../../src/assets/classtools_web_design/info_logo.png";
import Review from "../../../../src/assets/classtools_web_design/review_logo.png";

import ReviewLogo from "../../../../src/assets/classtools_web_design/star_logo.png";
import kmicon from "../../../../src/assets/classtools_web_design/gps_logo.png";
import price from "../../../../src/assets/classtools_web_design/card_logo.png";
import { Link } from "react-router-dom";

const Product_section_3 = () => {
  return (
    <section className="">
      <div className="flex flex-wrap space-x-4 py-5 text-[18px] md:text-[21px]">
        <Link
          to="/product"
          className=" px-4  rounded-full bg-[#d4d2d2]  hover:bg-[#a5a4a4]  flex items-center"
        >
          <img
            src={galleryLogo}
            alt="gallery-logo"
            className="w-[16px] h-[16px] mr-2"
          />
          <p className="text-[14px] font-semibold "> Gallery</p>
        </Link>
        <Link
          to="/product"
          className="text-ash px-4 rounded-full bg-white border border-3  hover:bg-[#a5a4a4]   flex items-center"
        >
          <img src={Info} alt="info-logo" className="w-[16px] h-[16px] mr-2" />
          <p className="text-[14px] text-red-600 font-semibold "> Info</p>
        </Link>
        <Link
          to="/product"
          className="text-ash px-4 py-2 rounded-full bg-[#d4d2d2]  hover:bg-[#a5a4a4]  flex items-center"
        >
          <img
            src={Review}
            alt="review-logo"
            className="w-[16px] h-[16px] mr-2  "
          />
          <p className="text-[14px]  font-semibold "> Review</p>
        </Link>
      </div>
      <hr className="border-t-2 border-gray-300" />
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-5">
        <p className="flex flex-col md:flex-row md:space-x-4 text-[16px] md:text-[18px]">
          <span id="review-count" className="flex items-center space-x-2">
            <img src={ReviewLogo} alt="review-icon" className="h-4" />
            <span className="text-[14px] ">4.5 (4 Reviews)</span>
          </span>
          <span
            id="distance"
            className="flex items-center space-x-2 mt-2 md:mt-0 ml-0 md:ml-4"
          >
            <img src={kmicon} alt="km-icon" className="h-6" />
            <span className="text-[14px] ">1.4 km from center</span>
          </span>
          <span
            id="price"
            className="flex items-center space-x-2 mt-2 md:mt-0 ml-0 md:ml-4"
          >
            <img src={price} alt="price-icon" className="h-8" />
            <span className="text-[14px] ">$2,400</span>
          </span>
        </p>
      </div>
    </section>
  );
};
export default Product_section_3;
