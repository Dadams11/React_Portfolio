import React from 'react';

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href={deployedUrl}>Deployed Application</a>
      <a href={repoUrl}>GitHub Repository</a>
    </div>
  );
};

export default Project;
