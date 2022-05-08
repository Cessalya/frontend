import React from "react";
import {Route, Switch} from 'react-router-dom';
import checkout from "../pages/checkout";
import hommepage from "../pages/homepage";
import keranjang from "../pages/keranjang";
import kontak from "../pages/kontak";
import produk_detail from "../pages/produk_detail";
import produk from "../pages/produk";
import tentang from "../pages/tentang";
import transaksi from "../pages/transaksi";
import Navbar from "../components/navbar";
import "../index.css"
import Footer from "../components/footer";

const Routes = () => {
    return(
        <div>
            <Navbar/>
        <Switch>
            <Route path="/" exact component={hommepage}/>
            <Route path="/produk" exact component={produk}/>
            <Route path="/produk/:url" exact component={produk_detail}/>
            <Route path="/kontak" exact component={kontak}/>
            <Route path="/tentang" exact component={tentang}/>
            <Route path="/keranjang" exact component={keranjang}/>
            <Route path="/checkout" exact component={checkout}/>
            <Route path="/transaksi" exact component={transaksi}/>

        </Switch>
        <Footer />
        </div>
    )
}
export default Routes;