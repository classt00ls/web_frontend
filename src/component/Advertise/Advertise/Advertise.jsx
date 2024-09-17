import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { FaEye, FaMousePointer } from "react-icons/fa"; // Import Icons
import { Link } from "react-router-dom";
import AdvertisementStats from "../AdvertisementStats/AdvertisementStats";

const Advertise = () => {
  const [ads, setAds] = useState([]);
  const [placementFilter, setPlacementFilter] = useState("");
  const [formatFilter, setFormatFilter] = useState("");

  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get("/advertisement.json");
      setAds(response.data.ads);
    } catch (error) {
      console.error("Error fetching ads:", error);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  // Filter the ads based on placement and format
  const filteredAds = ads.filter((ad) => {
    return (
      (!placementFilter || ad.placement === placementFilter) &&
      (!formatFilter || ad.format === formatFilter)
    );
  });

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="flex gap-5 mb-5 flex-col md:flex-row justify-between">
        <h1 className="text-3xl font-bold text-center mb-8">
          Advertise with Us
        </h1>
        <Link
          className="text-1xl text-white font-semibold btn btn-success"
          to="/advertise/post"
        >
          Add New Advertisement
        </Link>
        <Link
          className="text-1xl text-white font-semibold btn btn-info"
          to="/advertise/status"
        >
          Check Advertisement Stats
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center mb-6">
        <div className="mr-4">
          <label className="block font-bold text-gray-700 mb-2">
            Placement
          </label>
          <select
            value={placementFilter}
            onChange={(e) => setPlacementFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">All Placements</option>
            <option value="homepage">Homepage</option>
            <option value="community">Community</option>
            <option value="blog">Blog</option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2">Format</label>
          <select
            value={formatFilter}
            onChange={(e) => setFormatFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">All Formats</option>
            <option value="banner">Banner</option>
            <option value="video">Video</option>
            <option value="newsletter">Newsletter</option>
          </select>
        </div>
      </div>

      {/* Advertisement List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAds.map((ad) => (
          <div key={ad.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={ad.image_url}
              alt={ad.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">{ad.title}</h2>
            <p className="text-gray-600">Placement: {ad.placement}</p>
            <p className="text-gray-600">Format: {ad.format}</p>

            {/* Performance Stats */}
            <div className="flex justify-between items-center mt-4 text-gray-600">
              <div className="flex items-center">
                <FaMousePointer className="mr-2 text-blue-500" />
                <span>{ad.clicks} Clicks</span>
              </div>
              <div className="flex items-center">
                <FaEye className="mr-2 text-green-500" />
                <span>{ad.views} Views</span>
              </div>
            </div>

            <a
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-2 bg-blue-500 text-white text-center rounded-lg"
            >
              Visit Ad
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
