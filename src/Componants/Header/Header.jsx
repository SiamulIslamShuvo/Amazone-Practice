import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="" />
      <div>
        <a className="anchor" href="/shop">
          shop
        </a>
        <a className="anchor" href="/Order">
          Order
        </a>
        <a className="anchor" href="/Inventory">
          Inventory
        </a>
        <a className="anchor" href="/Login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
