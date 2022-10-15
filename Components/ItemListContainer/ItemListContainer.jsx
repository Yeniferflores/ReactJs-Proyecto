import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"
import getProductByCategory from "../../mockAPI/mockAPI";
import getProduct  from "../../mockAPI/mockAPI";
import {useParams} from "react-router-dom";

function ItemListContainer (props) {
    const [productList, setProductList] = useState([])
    const params = useParams();
    const categoryID = params.categoryID;
    
    useEffect(() => {
        if (categoryID === undefined) {
            getProduct().then((data) => {
                setProductList(data);
          });
        } else {
            getProductByCategory(categoryID).then((data) => {
                setProductList(data);
          });
        }
      }, [categoryID]);

    
    return(

        <div ClassName="container">
            <h3>{props.greeting}</h3>
            <ItemList productList= {productList}/>
        </div>
    );
}



export default ItemListContainer;