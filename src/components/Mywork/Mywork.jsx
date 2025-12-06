/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyworkCard = ({ work }) => {
  // Ensure we always have an array
  const imgs = Array.isArray(work.w_imgs) ? work.w_imgs : [];
  const [currentImg, setCurrentImg] = useState(0);

  // If no images are available, skip rendering
  if (imgs.length === 0) {
    return null;
  }

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % imgs.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + imgs.length) % imgs.length);

  return (
    <div className='mywork-details'>
      <img src={imgs[currentImg]} alt={work.w_name} />

      {/* Slider buttons appear only if more than one image */}
      {imgs.length > 1 && (
        <>
          <button className="slider-btn left" onClick={prevImg}>‹</button>
          <button className="slider-btn right" onClick={nextImg}>›</button>
        </>
      )}

      <div className="mywork-overlay">
        <h1>{work.w_name}</h1>
        <p>{work.w_des}</p>
        <a href={work.w_link} target="_blank" rel="noopener noreferrer">
          <button>
            Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

const Mywork = () => {
  return (
    <div className="mywork" id='work'>
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <MyworkCard key={work.w_no || index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Mywork;
