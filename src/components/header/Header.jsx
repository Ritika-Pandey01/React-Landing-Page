import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../../Styles/header.css";

function Header() {
  
  return (
 <nav className="navbar">
 <div className="logoG"><img src={logo} className="logo"  alt="logo"/><h1>gdsc</h1></div>
 <ul className="navLinks">
<div className="menu">
<li className="options home"><a href="#home">home</a></li>
<li className="options"><a href="#team">team</a></li>
<li className="options"><a href="#articles">articles</a></li>
<li className="options"><a href="#events">events</a></li>
<li className="options"><a href="#magazines">magazines</a></li>
</div>
  </ul>
  

</nav>
  );
}

export default Header;