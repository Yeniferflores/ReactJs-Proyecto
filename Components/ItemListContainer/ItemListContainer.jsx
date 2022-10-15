import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"
import getProduct  from "../../mockAPI/mockAPI";


function ItemListContainer (props) {
    const [productList, setProductList] = useState([])

    useEffect (
        () => {
            getProduct().then ((data) => {
                setProductList(data);
            });
        },[]
    )
    
    return(

        <div ClassName="container">
            <h3>{props.greeting}</h3>
            <ItemList productList= {productList}/>
        </div>
    );
}



export default ItemListContainer;