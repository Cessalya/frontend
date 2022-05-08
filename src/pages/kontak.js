import React, { Component } from "react";
import { FaCity } from "react-icons/fa"
import { Link } from "react-router-dom";


class kontak extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="container_1">
                        <div className="shadow">
                            <div className="grid_form_2">
                                <div className="kontak_left">
                                    <h2>Kontak Kami</h2>
                                    <p>Email: Admin@gmail.com</p>
                                    <p>Telp: 0123156</p>
                                    <p>Alamat: Jln. Pattimura</p>
                                </div>
                            </div>
                            <div className="grid_form_2">
                                <form className="form">
                                    <div className="form_group">
                                        <label>Nama Lengkap</label>
                                        <input type="text" placeholder="Cessalya Dea Ivana Putri" />
                                    </div>
                                    <div className="form_group">
                                        <label>Email</label>
                                        <input type="text" placeholder="Cessalya@gmail.com" />
                                    </div>
                                    <div className="form_group">
                                        <label>Pesan</label>
                                        <textarea className="input_textarea" placeholder="Tulis Pesan Disini"></textarea>
                                    </div>
                                    <button className="btn_primary">Kirim</button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default kontak;