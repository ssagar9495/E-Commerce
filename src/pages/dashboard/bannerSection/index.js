import React from "react";
import { BANNERS } from "../../../constants/dummyData";

const BannerSection = () => {
  return (
    <div style={{ padding: "10px 20px" }}>
      {BANNERS.map((banner) => {
        return (
          <img
            src={banner}
            alt={banner}
            style={{
              width: "20%",
              maxWidth: "22%",
              minWidth: "22%",
              minHeight: "30%",
              borderRadius: "10px",
              marginRight: "20px",
            }}
          />
        );
      })}
    </div>
  );
};

export default BannerSection;
