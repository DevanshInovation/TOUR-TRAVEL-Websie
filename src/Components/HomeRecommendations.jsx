import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import recommendationsData from "./RecommendationsData";
import "../Styles/Recommendation.css";

const categories = ["International", "Domestic", "Religious"];

const HomeRecommendations = () => {
  const [activeCategory, setActiveCategory] = useState("International");
  const navigate = useNavigate();

  // Filter logic
  const filteredData = recommendationsData.filter(item => {
    if (activeCategory === "International") return item.type === "International";
    if (activeCategory === "Domestic") return item.type === "Domestic";
    if (activeCategory === "Religious") return item.type === "Spiritual";
    return true;
  });

  return (
    <section id="recommendation" className="recommendation">
      <div className="title-bar">
        <h2 className="slider-title">Recommendations</h2>
        <button
          className="see-all-btn"
          onClick={() => navigate("/places")}
        >
          See all
        </button>
      </div>
      <div className="slider-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`slider-tab${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="slider-container">
        <div className="slider-row">
          {filteredData.map((dest, idx) => (
            <div className="slider-card" key={idx}>
              <img src={dest.image} alt={dest.title} />
              <h3>{dest.title}</h3>
              <p>{dest.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRecommendations;
