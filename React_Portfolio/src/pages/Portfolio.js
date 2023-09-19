import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <Project title="Project 1" imageUrl="image1.jpg" deployedUrl="https://example1.com" repoUrl="https://github.com/example1" />
      {/* Add 5 more Project components here */}
    </div>
  );
};

export default Portfolio;
