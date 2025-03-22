import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SuggestedTools = () => {

  const suggestions = useSelector(state => state.auth.suggestions);

  return (
    // <div className=" absolute w-full bg-white rounded-t-[40px] mt-[-40px] ">
    // TODO: si no hi ha sugestions, no es renderita res
    (suggestions ?( 
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-8 mt-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {suggestions?.map((suggestion, index) => (
            <Link to={`/product/${suggestion.id}`} key={suggestion?.id}>
            <div
            className="bg-gray-100 w-full p-3 sm:p-5 rounded-lg shadow-lg h-full flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LazyLoadImage
                  src={`https://www.google.com/s2/favicons?domain=${suggestion?.url.split('/?')[0]}&sz=256 `}
                  alt={suggestion?.name}
                  className="w-[72px] h-[72px] rounded-lg"
                  effect="blur"
                  placeholderSrc={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiBmaWxsPSIjZTJlMmUyIi8+PC9zdmc+`}
                />
                <h1 className="font-bold text-black text-[24px] px-4 ">
                  {suggestion?.name}
                </h1>
              </div>
            </div>

            <div className="mt-4 flex-grow flex flex-col">
              <p className="mt-2 text-gray-700 text-[10px] py-2 border-t border-b border-gray-300 font-lekton overflow-hidden">
                {suggestion?.excerpt}
              </p>

              <div className="flex justify-end mt-2">
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
