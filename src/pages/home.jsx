import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div>
        <h2>Welcome to home page</h2>
      </div>
      <Link to='/contacts'>Contacts</Link>
      <img src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" alt=""/>
    </div>
  );
}
