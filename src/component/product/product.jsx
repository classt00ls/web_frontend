import Product_section_1 from "./product_section_1/product_section_1";
import Product_section_2 from "./product_section_2/product_section_2";
import Product_section_3 from "./product_section_3/product_section_3";
import Product_section_4 from "./product_section_4/product_section_4";
import Product_section_5 from "./product_section_5/product_section_5";
import Product_section_6 from "./product_section_6/product_section_6";
import Product_section_7 from "./product_section_7/product_section_7";

const Product = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center container  mx-auto p-4 md:p-10">
      <Product_section_1 />
      <Product_section_2 />
      <Product_section_3 />
      <Product_section_4 />
      <Product_section_5 />
      <Product_section_6 />
      <Product_section_7 />
    </div>
  );
};

export default Product;
