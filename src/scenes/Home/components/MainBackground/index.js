import React from "react";
import "./style.scss";

function MainBackground() {
  return (
    <div className="svg-wrapper background-main">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 900">
        <defs>
          <radialGradient id="a" cx="0.233" cy="0.522" r="0.678" gradientTransform="matrix(.468 .008 -.004 1.002 .126 -.003)">
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.174" stopColor="#fff" />
            <stop offset="1" stopColor="#bae1f7" />
          </radialGradient>
        </defs>
        <path fill="url(#a)" stroke="rgba(0,0,0,0)" d="M0 0h1919v899H0z" transform="translate(.5 .5)" />
      </svg>
    </div>
  );
}

export default MainBackground;
