// import { useContext } from "react";
// import { dataContext } from "../../Context/Context";
import { useEffect } from "react";
import AiCategory from "./AiCategory/AiCategory";
import BlogSection from "./BlogSection/BlogSection";
import CardSection from "./CardSection/CardSection";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Sliders from "./Slider/Slider";
import SuggestedTools from "./SuggestedTools/SuggestedTools";
import SuggestedToolsFromPrompt from "./SuggestedTools/SuggestedToolsFromPrompt";
import VideoSection from "./VideoSection/VideoSection";
import { ToolApi } from "../../api/ToolApi";

const Home = () => {
  // const { listing } = useContext(dataContext)

  useEffect(() => {
    (async () => {
      console.log('home !')
    })()
  }, []);

  return (
    <div>
      <SuggestedToolsFromPrompt></SuggestedToolsFromPrompt>

      <AiCategory></AiCategory>
      
      {/* <CardSection></CardSection> */}
      <SuggestedTools></SuggestedTools>
      {/* <Section3></Section3>
      <Sliders></Sliders>
      <Section4></Section4>
      <VideoSection></VideoSection>
      <BlogSection></BlogSection> */}
    </div>
  );
};

export default Home;
