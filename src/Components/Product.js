import React, { useEffect, useState } from "react";
function Product({prod,art}){
    const [cantProd,setCantProd]=useState(0);
    const [prevCant,setPrevCant]=useState(0);
    useEffect(()=>{
        if(prevCant-cantProd<0)art("sum",1);
        else art("res",1);

    },[cantProd]);
    return(
        <div className="producto">
            <p>{prod}</p>
            <p onClick={()=>{setCantProd(cantProd),cantProd>0?setCantProd(cantProd-1):0}}>-</p><p>{cantProd}</p><p onClick={()=>{setPrevCant(cantProd),setCantProd(cantProd+1)}}>+</p>
        </div>
    );
}
export default Product;