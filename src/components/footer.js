import React from "react";
import Logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={Logo} alt="logo" />
            <p>@ Copyright ATK 2022</p>
        </div>
    )
}
export default Footer;