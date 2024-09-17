import React, { useState } from "react";
import axios from "axios";

const AdvertisementStats = () => {
  const [adId, setAdId] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const fetchAdStats = async () => {
    try {
      //   const response = await axios.get(`/advertisement/stats`, {
      const response = await axios.get(`/advertisementStats.json`, {
        params: { ad_id: adId },
      });
      setStats(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching ad stats:", err);
      setError("Failed to fetch advertisement stats");
      setStats(null);
    }
  };

  const handleInputChange = (e) => {
    setAdId(e.target.value);
  };

  const handleFetchStats = () => {
    if (adId.trim()) {
      fetchAdStats();
    } else {
      setError("Please enter a valid Ad ID");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Advertisement Stats</h2>

      <div className="mb-4">
        <input
          type="text"
          value={adId}
          onChange={handleInputChange}
          placeholder="Enter Ad ID like: ad123"
          className="border border-gray-400 p-2 rounded w-full"
        />
      </div>

      <button
        onClick={handleFetchStats}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Check Stats
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {stats && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Statistics for Ad ID: {stats.ad_id}
          </h3>
          <p>Clicks: {stats.clicks}</p>
          <p>Views: {stats.views}</p>
        </div>
      )}
    </div>
  );
};

export default AdvertisementStats;
