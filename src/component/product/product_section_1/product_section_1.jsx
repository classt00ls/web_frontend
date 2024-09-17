const Product_section_1 = () => {
  return (
    <div className=" ">
      <h6 className="text-[12px] sm:text-[14px]">
        <a href="/" className="hover:underline">
          Home
        </a>
        <span className="mx-1">{">"}</span>
        <a href="/Listings" className="hover:underline">
          Listings
        </a>
        <span className="mx-1">{">"}</span>
        <a
          className="text-orange-500 hover:underline"
          href="/Listings/Jasper.AI"
        >
          Jasper.AI
        </a>
      </h6>
    </div>
  );
};
export default Product_section_1;
