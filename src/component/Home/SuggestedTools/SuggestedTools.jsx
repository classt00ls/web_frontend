import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuggestedTools = () => {

  const suggestions = useSelector(state => state.auth.suggestions);

  return (
    // <div className=" absolute w-full bg-white rounded-t-[40px] mt-[-40px] ">
    // TODO: si no hi ha sugestions, no es renderita res
    (suggestions ?( 
    <div className=" w-full bg-white  ">
      <div className="container  mx-auto px-4 py-8 mt-10">
         <div className="grid justify-items-center  grid-cols-4 gap-4">
          {suggestions?.map((suggestion, index) => (
            <Link to={`/product/${suggestion.id}`}>
            <div
            key={suggestion?.id}
            className="bg-gray-100 w-[316px] p-5 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${suggestion?.url.split('/?')[0]}&sz=256 `}
                  alt={suggestion?.name}
                  className="w-[72px] h-[72px] rounded-lg"
                />
                <h1 className="font-bold text-black text-[24px] px-4 ">
                  {suggestion?.name}
                </h1>
              </div>
            </div>

            <div className="mt-4">

              <p className="mt-2 text-gray-700 text-[10px] py-2 border-t border-b border-gray-300 font-lekton">
                {suggestion?.excerpt}
              </p>

              <div className="flex justify-end  mt-[-25px] ">
              </div>
            </div>
          </div>
          </Link>
          ))}
        </div> 
      </div>
    </div>
  ) : <></> )
);
}

export default SuggestedTools;
