import React, { Component } from "react";
import DummyImage from "../assets/produk/1.png"
// import {Fix} from "react-icons/fa";
import {Link} from "react-router-dom"

class keranjang extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="keranjang_container">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Produk</th>
                                <th>@Harga</th>
                                <th>Qty</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text_center">
                                    <button className="hapus_keranjang"> X </button>
                                </td>
                                <td>
                                    <div className="item_keranjang">
                                        <img src={DummyImage}/>
                                        <h4>Nama Produk</h4>
                                    </div>
                                </td>
                                <td className="text_right">10.000</td>
                                <td className="text_center">2</td>
                                <td className="text_right">20.000</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="row">
                    <div className="total_keranjang">
                        <div>
                            <table className="table_total_keranjang">
                                <tr>
                                <td>TOTAL</td>
                                <td>Rp20.000</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <Link to="/checkout" className="button_bayar">Bayar Sekarang</Link> 
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default keranjang;
