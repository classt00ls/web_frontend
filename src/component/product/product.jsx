import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ProductDescription from "./product_description/product_description";
import { ToolApi } from "../../api/ToolApi";

const Product = () => {
  let { id } = useParams();
  const { i18n } = useTranslation();
  const [toolData, setToolData] = useState(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await ToolApi.getDetailTool(id, i18n.language);
      if(isMounted) {
        setToolData(response);
      }
    })()
    return () => { isMounted = false };
  }, [id, i18n.language]);

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
        />
      </div>
      :
      ""
    }
    </>
  );
};

export default Product;
