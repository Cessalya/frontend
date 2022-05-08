import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Styles from "../index.css"
import Logo from "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"

class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div>
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>

                    <ul className="topmenu">
                        <li><Link to="/">homepage</Link></li>
                        <li><Link to="/produk">produk</Link></li>
                        <li><Link to="/transaksi">transaksi</Link></li>
                        <li><Link to="/tentang">tentang</Link></li>
                        {/* <li><Link to="/produkdetail">produkdetail</Link></li> */}
                        <li><Link to="/kontak">kontak</Link></li>
                        <li></li>
                        {/* <li><Link to="checkout/">checkout</Link></li> */}
                    </ul>
                    <div className="cart">
                    <Link to="/keranjang"><FaShoppingCart /></Link>
                    </div>
                </div>
            </div>
        )


    }
}
export default Navbar;