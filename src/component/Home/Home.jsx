// import { useContext } from "react";
// import { dataContext } from "../../Context/Context";
import AiCategory from "./AiCategory/AiCategory";
import BlogSection from "./BlogSection/BlogSection";
import CardSection from "./CardSection/CardSection";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Sliders from "./Slider/Slider";
import VideoSection from "./VideoSection/VideoSection";

const Home = () => {
  // const { listing } = useContext(dataContext)

  return (
    <div>
      <AiCategory></AiCategory>
      <CardSection></CardSection>
      <Section3></Section3>
      <Sliders></Sliders>
      <Section4></Section4>
      <VideoSection></VideoSection>
      <BlogSection></BlogSection>
    </div>
  );
};

export default Home;
