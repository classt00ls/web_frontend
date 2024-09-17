import { useState } from "react";
const Product_section_5 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="md:mt-[-80px] mt-5">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-30">
          {!isExpanded ? (
            <div>
              <p className="text-[#1F1B2DBA] text-[15px] ">
                Jasper.ai es una herramienta de escritura de IA diseñada para
                generar textos de marketing, como publicaciones de blog,
                descripciones de productos, biografías de empresas, textos de
                anuncios y subtítulos en redes sociales. La herramienta ofrece
                cientos de plantillas para elegir, respondiendo a muchos
                escenarios, como si quieres escribir una publicación de blog de
                formato largo o necesitas la respuesta perfecta a una revisión.
                Se quita el estrés de una página en blanco de la escritura.
                Actualmente, Jasper.ai es el mejor para los vendedores, ya que
                ofrece ventajas a empresas de cualquier tamaño.
              </p>
              <div className="text-orange-500 mt-4">
                <button
                  onClick={handleToggle}
                  className="text-[14px] md:text-[16px]"
                >
                  Read more
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-black text-[15px] ">
                🔸 Generación de IA de texto e imagen La característica más
                destacada de Jasper.ai es su capacidad para generar texto e
                imagen mediante el uso de IA. Esto significa que los usuarios
                pueden obtener rápidamente contenido original y relevante con
                solo unos pocos clics. Ya sea que necesites redactar un
                artículo, una descripción de producto o incluso un guion,
                Jasper.ai puede ayudarte a generar contenido de alta calidad de
                manera eficiente.
                <br />
                🔸 Integración con Grammarly y otras extensiones de Chrome Se
                integra perfectamente con Grammarly y otras populares
                extensiones de Chrome. Esto permite a los usuarios aprovechar al
                máximo las capacidades de corrección gramatical y ortográfica de
                Grammarly, así como otras herramientas útiles. La integración
                con estas extensiones garantiza que tus escritos estén libres de
                errores y presenten un estilo de redacción impecable.
                <br />
                🔸 Historial de revisiones Ofrece un historial de revisiones que
                permite a los usuarios rastrear y comparar versiones anteriores
                de sus documentos. Esta función es especialmente útil cuando se
                trabaja en colaboración o cuando se necesita hacer un
                seguimiento de los cambios realizados en un documento a lo largo
                del tiempo. Con el historial de revisiones de Jasper.ai, los
                usuarios pueden mantener un registro claro de sus modificaciones
                y revertir a versiones anteriores si es necesario.
                <br />
                🔸 Guardado automáticamente Otra característica conveniente de
                Jasper.ai es su función de guardado automático. Ya no tendrás
                que preocuparte por perder tus cambios o documentos importantes
                debido a un corte de energía o una falla del sistema. Jasper.ai
                guarda automáticamente tus documentos en tiempo real, lo que
                garantiza que tus progresos estén siempre seguros y disponibles
                cuando los necesites.
                <br />
                🔸 Compartir documentos Con Jasper.ai, compartir tus documentos
                con otros es fácil y sencillo. Puedes invitar a colaboradores y
                trabajar juntos en tiempo real en un documento compartido. Esta
                característica es ideal para equipos que necesitan colaborar en
                proyectos de escritura o para profesionales que requieren
                comentarios y revisiones de colegas. Jasper.ai facilita la
                colaboración y el intercambio de ideas de manera eficiente.
                <br />
                🔸 Inicio de sesión multiusuario Jasper.ai también ofrece inicio
                de sesión multiusuario, lo que significa que varios usuarios
                pueden acceder y trabajar en la plataforma utilizando sus
                propias cuentas individuales. Esto es especialmente útil para
                empresas o equipos que desean mantener un seguimiento claro de
                las contribuciones individuales y mantener la privacidad de sus
                documentos. Con el inicio de sesión multiusuario de Jasper.ai,
                cada miembro del equipo puede acceder a sus documentos y
                realizar cambios según sea necesario.
                <br />
                🔸 Comprobador de plagio La integridad del contenido es
                esencial, y Jasper.ai lo entiende. Con su comprobador de plagio
                incorporado, los usuarios pueden asegurarse de que su contenido
                sea original y no infrinja los derechos de autor. La función de
                comprobación de plagio escanea el texto en busca de similitudes
                con otras fuentes en línea, brindándote tranquilidad y
                garantizando la autenticidad de tu trabajo.
                <br />
                🔸 Personalización de la voz de la marca Jasper.ai ofrece una
                opción de personalización de la voz de la marca, lo que permite
                a los usuarios adaptar el tono y el estilo del texto generado
                según las necesidades de su marca. Esto es especialmente valioso
                para empresas que desean mantener una coherencia en su
                comunicación y asegurarse de que el contenido refleje su
                identidad de marca de manera precisa.
              </p>
              <div className="text-orange-500 mt-4">
                <button
                  onClick={handleToggle}
                  className="text-[14px] md:text-[16px]"
                >
                  Read less
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product_section_5;
