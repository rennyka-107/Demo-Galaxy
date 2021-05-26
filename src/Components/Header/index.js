import React from "react";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="header-container">
      <div className="main">
        <div className="top-content">
          <Logo />
          <div className="navbar">
            <div className="item home">Home</div>
            <div className="item">About us</div>
            <div className="item">Features</div>
            <div className="item">Contact us</div>
          </div>
        </div>
        <div className="bot-content">
          <p>World of galaxy</p>
          <p>Beautiful of galaxy</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
