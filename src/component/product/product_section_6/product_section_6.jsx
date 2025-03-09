import React from "react";
import { useTranslation } from "react-i18next";
import I from "../../../../src/assets/classtools_web_design/Group.png";
import H from "../../../../src/assets/classtools_web_design/Vector (4).png";
import G from "../../../../src/assets/classtools_web_design/Vector (5).png";
import C from "../../../../src/assets/classtools_web_design/Vector (6).png";
import IN from "../../../../src/assets/classtools_web_design/Vector (7).png";
import CO from "../../../../src/assets/classtools_web_design/Vector (8).png";
import signalLogo from "../../../../src/assets/classtools_web_design/Group 252.png";
import YTLogo from "../../../../src/assets/classtools_web_design/Group 262.png";

import parse from 'html-react-parser'

const Product_section_6 = ({ title, features }) => {
  const { t } = useTranslation();

  // Nos aseguramos de que el título esté en el formato correcto
  const formattedTitle = title ? title.trim() : '';

  return (
    <section className=" mt-10">
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:pr-20">
          <h1 className="text-black font-bold mt-5  text-[24px] ">
            {t('product.main_features', { title: formattedTitle })}
          </h1>
          <br />
          {parse (features)}
          
          
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-black font-bold mt-5 text-[24px]">
              Cómo utilizar {title}
            </h1>
            <div className="flex items-center mt-8 text-[15px] ">
              <img
                className="w-[20px] h-[13px]"
                src={YTLogo}
                alt="youtube-icon"
              />
              <a
                href="https://youtu.be/7tdn-O3uus8"
                className="mx-2 text-blue-500 hover:underline"
              >
                YouTube: https://youtu.be/7tdn-O3uus8
              </a>
            </div>
            <ul className="text-[15px]">
              <li className="flex my-2">
                <p className="mx-10">1. Elige una plantilla.</p>
              </li>
              <li className="flex my-2">
                <p className="mx-10">2. Añade tus entradas.</p>
              </li>
              <li className="flex my-2">
                <p className="mx-10">3. Ve la salida.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product_section_6;
