import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
function ShoppingCart(){
    const [numCartArticles,setNumCartArticles]=useState(1);
    const calcProd=(op,num)=>{
        switch (op) {
            case "res":
                setNumCartArticles(numCartArticles-num);
                break;
            case "sum":
                setNumCartArticles(numCartArticles+num);
                break;
        }
    }
    return(
        <React.Fragment>
            <Navbar />
            <h1>Shopping</h1>
            <h5>Carrito: {numCartArticles}</h5>
            <Products art={calcProd}/>
        </React.Fragment>
    );
}
export default ShoppingCart;