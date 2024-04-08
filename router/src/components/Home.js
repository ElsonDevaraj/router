// src/components/Home.js
import React from 'react';
import image from '../image.jpg'; // Adjust the path based on your folder structure

const Home = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="text-center">
        <h1 className="text-6xl">Welcome to my website</h1>
        <h4 className="text-4xl">I am ELSON DEVARAJ</h4>
      </div>
    </div>
  );
};

export default Home;
