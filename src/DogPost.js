import React from 'react';
import './DogPost.css';

const DogPost = ({ username, imageUrl, caption }) => {
  return (
    <div className="dog-post">
      <div className="post-header">
        <div className="username">{username}</div>
      </div>
      <div className="post-image">
        <img src={imageUrl} alt={`${username}'s post`} />
      </div>
      <div className="post-actions">
        <button className="action-button">❤️</button>
        <button className="action-button">💬</button>
        <button className="action-button">📤</button>
      </div>
      <div className="post-caption">
        <span className="username">{username}</span> {caption}
      </div>
    </div>
  );
};

export default DogPost; 