import React from "react";
import { Link } from "react-router-dom";

const ProdukItem= (props) => {
    return(
        <div className="item_produk">
            <div>
                <img src={props.image} alt={props.title}/>
                <h2>{props.title}</h2>
                <h4>{props.price}</h4>
                <Link to={'produk/'+ props.action}>BELI</Link>
            </div>
        </div>
    )
}
export default ProdukItem;