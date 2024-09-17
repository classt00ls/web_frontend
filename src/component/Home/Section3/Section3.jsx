import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "/src/assets/AI SECTION/Group 275.png";
import image2 from "/src/assets/AI SECTION/Group 276.png";
import image3 from "/src/assets/AI SECTION/Group 277.png";
import image4 from "/src/assets/AI SECTION/Group 279.png";
import image5 from "/src/assets/AI SECTION/Group 280.png";
import image6 from "/src/assets/AI SECTION/Group 281.png";
import CoverImage from "/src/assets/AI SECTION/Rectangle 15.png";

const Section3 = () => {
  const appsDetails = [
    {
      img: image1,
      name: "Foros Y grupos Debate",
      desc: "lorem ipsum lorem ipsum",
      rating: 4,
      reviews: 4,
      
    },
    {
      img: image2,
      name: "Articulos",
      desc: "lorem ipsum lorem ipsum",
      rating: 4.0,
      reviews: 3,
    },
    {
      img: image3,
      name: "Foros Especificos",
      desc: "lorem ipsum lorem ipsum",
      rating: 4.0,
      reviews: 3,
    },
    {
      img: image4,
      name: "Tutoriales",
      desc: "lorem ipsum lorem ipsum",
      rating: 4.3,
      reviews: 4,
    },
    {
      img: image5,
      name: "Grupos de Debate",
      desc: "lorem ipsum lorem ipsum",
      rating: 4.3,
      reviews: 4,
    },
    {
      img: image6,
      name: "Guias",
      desc: "lorem ipsum lorem ipsum",
      rating: 4,
      reviews: 4,
    },
  ];
  return (
    <div className=" bg-[#F1F1F1] p-20 ">
      <div className="md:flex justify-center gap-10 ">
        <div>
          <img src={CoverImage} alt="" />
        </div>
        <div>
          <div className="flex md:gap-10 gap-6 mt-5 md:mt-0">
            <h1 className="md:text-[27px]  md:w-[585px] w-[200px]  font-bold  ">
              Un espacio para aprender, compartir y crecer juntos
            </h1>
            <div className="flex items-center md:mt-[-40px] hover:text-orange-500 gap-2 ">
              <Link to="/" className=" ">
                View all
              </Link>
              <FaArrowRight className="text-gray-700 hover:text-orange-500 md:text-1xl" />
            </div>
          </div>
          <div className="grid md:grid-cols-2  ">
            {appsDetails.map((app, index) => (
              <div key={index} className="flex mt-4 gap-5">
                <img className="" src={app.img} alt="" />
                <div>
                  <p className="text-[17px] font-semibold"> {app.name}</p>
                  <p className="text-[13px] w-[120px]"> {app.desc}</p>
                  <div className="flex items-center text-xs text-yellow-500 mt-1">
                    <FaStar className="mr-1" />
                    <span>{app.rating}</span>
                    <span className="text-gray-600 ml-1">({app.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
