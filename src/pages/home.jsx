import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div>
        <h2>Welcome to home page</h2>
      </div>
      <Link to='/contacts'>Contacts</Link>
    </div>
  );
}
