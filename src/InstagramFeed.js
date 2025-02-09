import React from 'react';
import './InstagramFeed.css';
import DogPost from './DogPost';

const dogPosts = [
  {
    username: 'GoodBoyMaximus',
    imageUrl: 'dog images/1.png',
    caption: 'Living my best life with these treats 🦴',
  },
  {
    username: 'BarkingMadness',
    imageUrl: 'dog images/2.png',
    caption: 'Squad goals achieved 🐾',
  },
  {
    username: 'PawsomeVibes',
    imageUrl: 'dog images/3.png',
    caption: 'Just chillin with my fur friends 🌞',
  },
];

const InstagramFeed = () => {
  return (
    <div className="instagram-feed">
      {dogPosts.map((post, index) => (
        <DogPost
          key={index}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default InstagramFeed; 