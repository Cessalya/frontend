import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShippingFast, FaFunnelDollar, FaUserShield } from "react-icons/fa";
import ProdukItem from "../components/produk_item";
import produk_1 from "../assets/produk/1.png";
import produk_2 from "../assets/produk/2.png";
import produk_3 from "../assets/produk/3.png";
import produk_4 from "../assets/produk/4.png";
import produk_5 from "../assets/produk/5.png";
import produk_6 from "../assets/produk/6.png";
import produk_7 from "../assets/produk/7.png";
import produk_8 from "../assets/produk/8.png";
import image_1 from "../assets/produk/image_1.png";
// import Logo from "../assets/logo.png"

class hommepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="wrapper banner_1"></div>
                <div className="wrapper">
                    <div className="row">
                        <div className="card">
                            <div className="input_group_1">
                                <input type="search" placeholder="Cari Produk" />
                                <button>Cari</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="grid_produk">
                            <ProdukItem image={produk_1} title="GROSIR Buku Tulis Sinar Dunia / SIDU 38 Lembar" price="Rp29.500" action="detail_link_sample_1"/>
                            <ProdukItem image={produk_2} title="Pensil Faber Castell 9000 HB/2B" price="Rp3.500" action="detail_link_sample_2"/>
                            <ProdukItem image={produk_3} title="Buku Gambar A4 Sidu / Sinar Dunia" price="Rp16.000" action="detail_link_sample_3"/>
                            <ProdukItem image={produk_4} title="Sampul Buku / Sampul Plastik Cap Gajah" price="Rp6.500" action="detail_link_sample_4"/>
                            <ProdukItem image={produk_5} title="Buku Tulis Boxy Big Boss 42 Lembar 1 Pak" price="Rp27.500" action="detail_link_sample_5"/>
                            <ProdukItem image={produk_6} title="Kertas kado kraft vintage koran" price="Rp4.000" action="detail_link_sample_6"/>
                            <ProdukItem image={produk_7} title="DS Dual Brush Pen Waterbased Sketch Marker" price="Rp11.500" action="detail_link_sample_7"/>
                            <ProdukItem image={produk_8} title="Bubble wrap tambahan packing" price="Rp5.000" action="detail_link_sample_8"/>

                        </div>
                    </div>
                </div>
                <div className="bg_primary">
                    <div className="grid_2">
                        <div className="banner_link">
                            <h1>Buku Tulis Sidu
                                Tebal 38</h1>
                            <p>Performance and design. Taken right to the edge.</p>
                            <Link to="/">BELI</Link>
                        </div>
                        <div>
                            <img src={image_1} className="image_custom_banner" alt="banner_1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="grid_3">
                        <div>

                            <FaShippingFast />
                            <h4>FREE SHIPPING</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </div>
                        <div>

                            <FaFunnelDollar />
                            <h4>100% REFUND</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </div>
                        <div>

                            <FaUserShield />
                            <h4>SUPPORT 24/7</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default hommepage;