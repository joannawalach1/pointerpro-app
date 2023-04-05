import React from 'react';
import { Link } from 'react-router-dom';

const RecentContacts = () => {
  return (
    <div className="recentcontacts">
      <div className="recentcontacts__title">Recent Contacts</div>
      <div className="recentcontacts__text">
        <p>There are no contacts yet. Create one over here.</p>
      </div>
      <div className="recentcontacts__link">
        <Link to="/viewall" className="recentcontacts__a">View all</Link></div>
    </div>
  )
}

export default RecentContacts