import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Product_section_3 from "./product_section_3/product_section_3";
import ProductDescription from "./product_description/product_description";
import Product_section_6 from "./product_section_6/product_section_6";
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
        />
        <Product_section_3 
          stars={toolData.stars} 
          pricing={toolData.pricing}
        />
        <Product_section_6 title={toolData.name} features={toolData.features} />
      </div>
      :
      ""
    }
    </>
  );
};

export default Product;
