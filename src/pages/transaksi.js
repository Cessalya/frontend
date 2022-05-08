import React, { Component } from "react";
import {FaCheckSquare} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class transaksi extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="container">
                        <div className="transaksi_container">
                            <FaCheckSquare/>
                            <div className="space"></div>
                            <h2>Pembayaran Sukses</h2>
                            <p>Dengan No Transaksi: TRS-3897393863876</p>
                            <div className="space"></div>
                            <Link to="/" className="btn_primary">Kembali ke home</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default transaksi;