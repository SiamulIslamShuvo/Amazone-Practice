import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <img src={Logo} alt="" />
            <div>
                <Link className="anchor" to="/">
                    shop
                </Link>
                <Link className="anchor" to="/Orders">
                    Order
                </Link>
                <Link className="anchor" to="/Inventory">
                    Inventory
                </Link>
                <Link className="anchor" to="/Login">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Header;
