import React from "react";

const Logo = ({ logoStyle, imgLogoStyle }) => {
  return (
    <div className="logo" style={logoStyle}>
      <div className="img-logo" style={imgLogoStyle}></div>
    </div>
  );
};

export default Logo;
