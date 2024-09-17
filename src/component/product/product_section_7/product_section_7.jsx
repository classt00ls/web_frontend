import card1 from "../../../../src/assets/classtools_web_design/Rectangle 26.png";
import card2 from "../../../../src/assets/classtools_web_design/Rectangle 27.png";
import card3 from "../../../../src/assets/classtools_web_design/Rectangle 28.png";
import visa from "../../../../src/assets/classtools_web_design/visa.png";
import Mastercard from "../../../../src/assets/classtools_web_design/mastercard.png";
import Maestro from "../../../../src/assets/classtools_web_design/maestro.png";
import AmericanExpress from "../../../../src/assets/classtools_web_design/american-express.png";
import { Link } from "react-router-dom";

const Product_section_7 = () => {
  const cards = [
    {
      name: "MAKE",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: card1,
      link: "/",
    },
    {
      name: "COLORIZE.AI",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: card2,
      link: "/",
    },
    {
      name: "CRAFT",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: card3,
      link: "/",
    },
  ];

  return (
    <section className="mt-20">
      <div className="flex flex-col  md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:pr-30">
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="flex flex-col md:flex-row">
            <p className="text-black font-bold text-[18px] mb-4 md:mb-0 md:mr-4">
              Cards accepted at this hotel:
            </p>
            <div className="flex mt-[-5px] ">
              <img className="h-8 md:h-12" src={visa} alt="Visa" />
              <img className="h-8 md:h-12" src={Mastercard} alt="Mastercard" />
              <img className="h-8 md:h-12" src={Maestro} alt="Maestro" />
              <img
                className="h-8 md:h-12"
                src={AmericanExpress}
                alt="American Express"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Link
              to={card.link}
              key={index}
              className="flex flex-col items-center"
            >
              <img src={card.img} alt={card.name} className="w-full" />
              <div className="text-[18px] my-2">{card.name}</div>
              <h3 className="text-[15px] font-semibold text-gray-700">
                {card.description}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product_section_7;
