import I from "../../../../src/assets/classtools_web_design/Group.png";
import H from "../../../../src/assets/classtools_web_design/Vector (4).png";
import G from "../../../../src/assets/classtools_web_design/Vector (5).png";
import C from "../../../../src/assets/classtools_web_design/Vector (6).png";
import IN from "../../../../src/assets/classtools_web_design/Vector (7).png";
import CO from "../../../../src/assets/classtools_web_design/Vector (8).png";
import signalLogo from "../../../../src/assets/classtools_web_design/Group 252.png";
import YTLogo from "../../../../src/assets/classtools_web_design/Group 262.png";

const Product_section_6 = () => {
  return (
    <section className=" mt-10">
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:pr-20">
          <h1 className="text-black font-bold mt-5  text-[24px] ">
            Principales características de Jasper.ai
          </h1>
          <ul className="mt-10 text-[15px] ">
            <li className="flex items-center my-2">
              <img className="h-4" src={signalLogo} alt="feature-icon" />
              <p className="mx-2">Generación de IA de texto e imagen</p>
            </li>
            <li className="flex items-center my-2">
              <img className="h-4" src={I} alt="feature-icon" />
              <p className="mx-2">
                Integración con Grammarly y otras extensiones de Chrome
              </p>
            </li>
            <li className="flex items-center my-2">
              <img className="h-4" src={H} alt="feature-icon" />
              <p className="mx-2">Historial de revisiones</p>
            </li>
            <li className="flex items-center my-2">
              <img className="h-4" src={G} alt="feature-icon" />
              <p className="mx-2">Guardada automáticamente</p>
            </li>
            <li className="flex items-center my-2">
              <img className="h-4" src={C} alt="feature-icon" />
              <p className="mx-2">Compartir documentos</p>
            </li>
            <li className="flex items-center my-2">
              <img className="h-4" src={IN} alt="feature-icon" />
              <p className="mx-2">Inicio de sesión multiusuario</p>
            </li>
            <li className="flex items-center my-2">
              <img className="h-4" src={CO} alt="feature-icon" />
              <p className="mx-2">Comprobador de plagio</p>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-black font-bold mt-5 text-[24px]">
              Cómo utilizar Jasper.ai
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
