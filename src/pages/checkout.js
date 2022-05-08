import React, { Component } from "react";
import {FaCity} from "react-icons/fa"
import { Link } from "react-router-dom";


class checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="container_1">
                        <form className="form">
                        <h2 className="color_primary">Isi form untuk Metode pembayaran</h2>
                        <div className="form_2_grid">
                            <div className="grid_form_2">
                                <input type="text" className="input_style"placeholder="Nama Depan" />
                                <input type="text" className="input_style"placeholder="Email" />
                                <div className="payment_method">
                                    <h4 className="color_primary">Metode Pembayaran</h4>
                                    <div className="">
                                        <FaCity/><span>Bank Transfer</span>
                                    </div>
                                    <p>Bank BRI an. ATK Kita No.09875321</p>
                                </div>
                            </div>
                            <div className="grid_form_2">
                                <input type="text" className="input_style" placeholder="Nama Belakang" />
                                <textarea className="input_textarea" placeholder="Alamat Lengkap"></textarea>
                                <input type="text" className="input_style"placeholder="Telp" />
                            </div>

                        </div>
                        <Link to="transaksi" className="btn_primary">Proses Pembayaran</Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default checkout;