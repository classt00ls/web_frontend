import { createContext } from "react"


export const tagContext = createContext();

const TagProvider = ({children}) => {

    const [categoriesData,setCategoriesData] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("AI productivity tools");
    const [subCategories, setSubCategories] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await TagApi.getAllCategories();
            setCategoriesData(response);
          } catch (err) {
            console.log("Failed to fetch categories");
          }
        };
        fetchData();
       },[]);



       useEffect(() => {
        if (selectedCategory && categoriesData) {
          const filteredData = categoriesData?.filter(tool => tool.title === selectedCategory);
          setSubCategories(filteredData[0]?.subcategories);
          
        }
      },[categoriesData,selectedCategory])


    const value = {
        categoriesData,
        selectedCategory,
        setSelectedCategory,
        subCategories
    };
    return <tagContext.Provider value={value}>{children}</tagContext.Provider>;
}

export default TagProvider;