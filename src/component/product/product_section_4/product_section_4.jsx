import ReviewLogo from "../../../../src/assets/classtools_web_design/star_logo.png";
import kmicon from "../../../../src/assets/classtools_web_design/gps_logo.png";
import price from "../../../../src/assets/classtools_web_design/card_logo.png";

import jasperImage from "../../../../src/assets/classtools_web_design/jasper_image.png";
import arrowLogo from "../../../../src/assets/classtools_web_design/arrow_logo.png";
import flagLogo from "../../../../src/assets/classtools_web_design/flag_logo.png";

import signalLogo from "../../../../src/assets/classtools_web_design/Group 252.png";
import telephoneLogo from "../../../assets/classtools_web_design/telephone.png";
import globeLogo from "../../../assets/classtools_web_design/Globe.png";
import gmailLogo from "../../../assets/classtools_web_design/Gmail.png";
import gpsLogo from "../../../assets/classtools_web_design/gps_logo.png";

const Product_section_4 = () => {
  return (
    <section className="mt-5">
      <div className="flex flex-col justify-between md:flex-row">
        {/* Left Side */}

        <div className="w-full md:w-1/2 pr-0 md:pr-20">
          <div className="w-full text-[18px] md:text-[21px]">
            <div className="flex items-center justify-center md:justify-start">
              <img src={jasperImage} alt="review-logo" className="max-w-full" />
            </div>
            <div className="flex flex-col md:flex-row items-center my-10 text-[18px] md:text-[21px] space-y-4 md:space-y-0 md:space-x-4">
              <button className="flex items-center text-orange-500 bg-white rounded-full px-4 py-2 border border-orange-700 hover:text-white hover:bg-orange-500">
                <img src={arrowLogo} alt="Logo 2" className="h-4 mx-1 " />
                <p className="text-[14px]"> Reply to listing</p>
              </button>
              <button className="flex items-center text-orange-500 bg-white rounded-full px-4 py-2 border border-orange-700 hover:text-white hover:bg-orange-500">
                <img src={flagLogo} alt="Logo 2" className="h-4 mx-1" />
                <p className="text-[14px]"> Report to listing</p>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-[500px] mt-3 md:mt-[-20px]">
          <div>
            <div className=" p-4 rounded-3xl ">
              <div className="bg-white p-6 rounded-2xl border-2">
                <h1 className="text-black font-bold text-[20px] pt-5 ">
                  Jasper Studios
                </h1>
                <div className="flex mt-2  items-center ">
                  <p className="flex flex-col md:flex-row md:space-x-4 text-[16px] md:text-[18px] text-gray-500">
                    <span
                      id="review-count"
                      className="flex items-center space-x-2"
                    >
                      <img src={ReviewLogo} alt="review-icon" className="h-4" />
                      <span className="text-[13px]">4.5 (4 Reviews)</span>
                    </span>
                    <span
                      id="distance"
                      className="flex items-center space-x-2 mt-2 md:mt-0"
                    >
                      <img src={kmicon} alt="km-icon" className="h-6" />
                      <span className="text-[13px]">1.4 km from center</span>
                    </span>
                    <span
                      id="price"
                      className="flex items-center space-x-2 mt-2 md:mt-0"
                    >
                      <img src={price} alt="price-icon" className="h-8" />
                      <span className="text-[13px]">$2,400</span>
                    </span>
                  </p>
                </div>
                <hr className="border-t-2 border-gray-300 my-5" />
                <ul className="text-[15px] md:text-[18px] text-gray-500">
                  <li className="flex items-center my-2">
                    <img
                      className="w-[15px]v mr-2"
                      src={telephoneLogo}
                      alt=""
                    />
                    <p className="text-[15px]">
                      (302) 555-0107 , (302)555-0208
                    </p>
                  </li>
                  <li className="flex items-center my-2">
                    <img className="w-[15px] mr-2" src={globeLogo} alt="" />
                    <p className="text-[15px]">bb-hotel.com</p>
                  </li>
                  <li className="flex items-center my-2">
                    <img className="w-[15px] mr-2" src={gmailLogo} alt="" />
                    <p className="text-[15px]">bb-hotel@example.com</p>
                  </li>
                  <li className="flex items-center my-2">
                    <img className="w-[20px] mr-2" src={gpsLogo} alt="" />
                    <p className="text-[15px]">
                      Ollenhauertrabe 29, 13403 Berlin, Germany
                    </p>
                  </li>
                </ul>
                <hr className="border-t-2 border-gray-300 my-5" />
                <p className="font-bold text-black text-[20px]">
                  $50-100/night
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product_section_4;
