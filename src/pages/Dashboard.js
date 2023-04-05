import React from "react";
import AllActivities from "../components/AllActivities";
import DiagramField from "../components/DiagramField";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RecentContacts from "../components/RecentContacts";
import RecentQuest from "../components/RecentQuest";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard__left">
        <DiagramField />
        <div className="dashboard__bottom">
          <div className="dashboard__recent">
            <RecentQuest />
          </div>
          <div className="dashboard__allact">
            <AllActivities />
          </div> 
        </div>
        <div className="dashboard__contacts"><RecentContacts /></div>
       
      </div>
      <div className="dashboard__right">
        <LatestNews />
      </div>
    </div>
  );
};

export default Dashboard;
