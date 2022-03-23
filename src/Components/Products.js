import React, { useState } from "react";
import Product from "./Product";
function Products({art}){
    const[productos,setProductos]=useState(["Yogurt","Agua","Pan"]);
    return(
        <React.Fragment>
            {productos.map((producto)=>{
                return <Product art={art} prod={producto}></Product>
            })}
        </React.Fragment>
    )
}
export default Products;