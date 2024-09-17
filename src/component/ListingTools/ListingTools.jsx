import Listing from "./Listing/Listing";
import Sidebar from "./Sidebar/Sidebar";

const ListingTools = () => {
  return (
    <div className="md:flex">
      <div className="p-5 border-r border-r-[rgba(0, 0, 0, 0.1)]">
        <Sidebar></Sidebar>
      </div>
      <div>
        <Listing></Listing>
      </div>
    </div>
  );
};

export default ListingTools;
