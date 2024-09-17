import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";

const VideoSection = () => {
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/homeContent.json");
        setFeatures(response.data.featured_videos);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch featured_videos");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="mt-20 flex justify-center ">
      <div className="md:flex gap-10 ">
        {features.map((feature, index) => (
          <Link key={index} to={feature.embed_url}>
            <div className="bg-[#FD5631] text-white rounded-lg p-10 flex mt-5 md:mt-0 items-center justify-between md:w-[577px] md:h-[177px]   mx-auto shadow-md hover:bg-orange-600 transition-colors">
              <div>
                <h3 className="md:text-[24px] font-bold">{feature.title}</h3>
                <p className="text-[12px]">{feature.description}</p>
              </div>
              <div className="ml-4">
                <FaPlay md:size={28} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
