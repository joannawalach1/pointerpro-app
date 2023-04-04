import React from "react";
import { Link } from "react-router-dom";

const RecentQuest = () => {
  return (
    <div className="recentquest">
      <div className="recentquest__title">Recent Questionnaires</div>
      <div className="recentquest__text">
        <p>My Questionnaire</p>
        <p>su.vc/jgklmlhe — Apr 4, 2023</p>
      </div>
      <div className="recentquest__text">
        <p>My Questionnaire</p>
        <p>su.vc/jgklmlhe — Apr 4, 2023</p>
      </div>
      <div className="recentquest__link">
        <Link to="/viewall" className="recentquest__a">View all</Link></div>
    </div>
  );
};

export default RecentQuest;
