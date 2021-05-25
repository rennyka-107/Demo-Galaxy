import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left"></div>
      <div className="main">
        <div className="top-content">
          <div className="logo">
            <div className="img-logo"></div>
          </div>
          <div className="navbar"></div>
        </div>
        <div className="bot-content">
          <h2>World of galaxy</h2>
          <h4>Beautiful of galaxy</h4>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Header;
