import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ProductDescription from "./product_description/product_description";
import { ToolApi } from "../../api/ToolApi";
import { slugify } from "../../utils/slugify";

const Product = () => {
  let { slug } = useParams();
  const { i18n } = useTranslation();
  const [toolData, setToolData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      console.log('🎯 Componente Product - Iniciando búsqueda');
      console.log('🔑 Slug recibido en componente:', slug);
      console.log('🌍 Idioma en componente:', i18n.language);
      
      try {
        const response = await ToolApi.getDetailToolBySlug(slug, i18n.language);
        console.log('✅ Respuesta recibida en componente:', response);
        if (isMounted && response) {
          setToolData(response);
        }
      } catch (err) {
        console.log('❌ Error en componente:', err);
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => { isMounted = false };
  }, [slug, i18n.language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!toolData) return <div>No data found</div>;

  return (
    <>
    { 
    toolData.name && toolData.features ?
      <div className="bg-white min-h-screen flex flex-col justify-center container mx-auto p-4 md:p-10">
        <ProductDescription 
          title={toolData.name}
          stars={toolData.stars}
          pricing={toolData.pricing}
          url={toolData.url}
          description={toolData.description}
          video_url={toolData.video_url}
          features={toolData.features}
          excerpt={toolData.excerpt}
          prosAndCons={toolData.prosAndCons}
          howToUse={toolData.howToUse}
        />
      </div>
      :
      ""
    }
    </>
  );
};

export default Product;
