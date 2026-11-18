import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title }:any) => {
  return (
    <div className="section-title-container">
      <h2 className="section-title-text">{title}</h2>
      <hr className="section-title-divider" />
    </div>
  );
};

export default SectionTitle;