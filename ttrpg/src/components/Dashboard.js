import React from "react";
import "./Dashboard.css";
import { GiCowled } from "react-icons/gi";
import { GiAbbotMeeple } from "react-icons/gi";
import { GiBattleGear } from "react-icons/gi";
import { GiBlackBook } from "react-icons/gi";
import { GiCalendar } from "react-icons/gi";

export default function Dashboard() {
  return (
    <div className="main-dashboard">
      <div className="dashboard-sidebar">
        <ul>
          <label>MAIN</label>
          <li>
            {" "}
            <GiAbbotMeeple size="24" /> <span>Dashboard</span>{" "}
          </li>
          <li>
            {" "}
            <GiCowled size="24" /> <span>My Characters</span>
          </li>
          <li>
            {" "}
            <GiBattleGear size="24" /> <span>My Campaigns</span>
          </li>
          <li>
            {" "}
            <GiBlackBook size="24" /> <span>My Stories (GM)</span>{" "}
          </li>
        </ul>
        <ul>
          <label>OTHERS</label>
          <li>
            {" "}
            <GiCalendar size="24" /> <span>Schedule</span>
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <div className="chat"></div>
      </div>
    </div>
  );
}
