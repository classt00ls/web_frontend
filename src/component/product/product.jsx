import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import Product_section_1 from "./product_section_1/product_section_1";
import Product_section_2 from "./product_section_2/product_section_2";
import Product_section_3 from "./product_section_3/product_section_3";
import Product_section_4 from "./product_section_4/product_section_4";
import Product_section_5 from "./product_section_5/product_section_5";
import Product_section_6 from "./product_section_6/product_section_6";
import Product_section_7 from "./product_section_7/product_section_7";
import { ToolApi } from "../../api/ToolApi";


const Product = () => {

  let { id } = useParams();

  const [toolData, setToolData] = useState(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await ToolApi.getDetailTool(id);
      if(isMounted) {
        setToolData(response);
        //console.log("la toolsData: ", toolData);
      }
    })()
    return () => { isMounted = false };
  }, [])

  return (
    <>
    { 
    toolData.name && toolData.features ?
      <div className="bg-white min-h-screen flex flex-col justify-center container  mx-auto p-4 md:p-10">
        <Product_section_1 title={toolData.name} />
        <Product_section_2 title={toolData.name}/>
        <Product_section_3 stars={toolData.stars} pricing={toolData.pricing}/>
        <Product_section_4 title={toolData.name} stars={toolData.stars} pricing={toolData.pricing} url={toolData.url}/>
        <Product_section_5 description={toolData.description} />
        <Product_section_6 title={toolData.name} features={toolData.features} />
        {/* <Product_section_7 /> */}
      </div>
      :
      ""
    }
    </>
  );
};

export default Product;
