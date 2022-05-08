import React, { Component } from "react";
import { FaCartPlus } from "react-icons/fa";
import sampleGambar from "../assets/produk/1.png"

class produk_detail extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="container_detail_produk">
                        <div className="detail_produk">
                            <div className="item">
                                <img src={sampleGambar} alt="Gambar Produk" />
                            </div>
                            <div className="item">
                                <div>
                                    <h1>Title Produk</h1>
                                    <h4>Price</h4>
                                    <hr />
                                    <p>Kategori: ??</p>
                                    <p>Deskripsi Singkat</p>
                                    <hr />
                                    <div className="input_group_2">
                                        <button>-</button>
                                        <input type="number" value="1" />
                                        <button>+</button>
                                    </div>
                                    <button className="tambah_keranjang"><FaCartPlus />Tambah Ke Keranjang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container_detail_produk">
                        <div className="deskripsi_produk">
                            <h2>DESKRIPSI</h2>
                            <hr />
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default produk_detail;