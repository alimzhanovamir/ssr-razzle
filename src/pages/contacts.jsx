import React from 'react';
import { Link } from 'react-router-dom';

export const Contacts = () => {
  return (
    <div>
      <div>
        <h2>Contacts</h2>
      </div>
      <Link to='/'>Home</Link>
      <img src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
    </div>
  );
}
