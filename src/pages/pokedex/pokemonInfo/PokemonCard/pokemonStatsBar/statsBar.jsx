import React from "react";
import "./statsBar.scss";

export const StatsBar = ({ stats }) => {
  const maxStat = 255;
  const currentStat = (stats / maxStat) * 100;

  return (
    <div className="stat-bar">
      <div className="stat-bar__current" style={{ width: `${currentStat}%` }} />
    </div>
  );
};
