import { useState } from "react";

import loveLogo from "../../../../src/assets/classtools_web_design/love_logo.png";
import shareLogo from "../../../../src/assets/classtools_web_design/share_logo.png";
import ytLogo from "../../../../src/assets/classtools_web_design/yt_logo2.png";
import xLogo from "../../../../src/assets/classtools_web_design/x_logo.png";
import linkLogo from "../../../../src/assets/classtools_web_design/linkedin_logo.png";

const Product_section_2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4">
        <h1 className="text-black font-bold text-[28px] md:text-[36px]">
          Jasper.AI
        </h1>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <img src={loveLogo} alt="Logo 1" className="h-4" />
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black rounded-full p-1 hover:border border-orange-700"
            >
              <img src={shareLogo} alt="Logo 2" className="h-4" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 hover:border border-orange-700">
                    <a
                      href="https://www.youtube.com/@JasperAI"
                      className="flex items-center space-x-2"
                    >
                      <img src={ytLogo} alt="yt-logo" className="h-4" />
                      <span className="text-black">YouTube</span>
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 hover:border border-orange-700">
                    <a
                      href="https://x.com/heyjasperai"
                      className="flex items-center space-x-2"
                    >
                      <img src={xLogo} alt="yt-logo" className="h-4" />
                      <span className="text-black">Twitter</span>
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 hover:border border-orange-700">
                    <a
                      href="https://www.linkedin.com/company/heyjasperai/"
                      className="flex items-center space-x-2"
                    >
                      <img src={linkLogo} alt="yt-logo" className="h-4" />
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
  );
};
export default Product_section_2;
