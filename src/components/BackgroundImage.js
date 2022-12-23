import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function BackgroundImage() {
  return (
    <div className="background__image">
      <StaticImage
        placeholder="blurred"
        src="../images/MB_Recce_001.jpg"
        alt="Market Bar"
      />
    </div>
  );
}
