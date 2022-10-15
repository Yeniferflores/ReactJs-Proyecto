import React, { useState, useEffect } from "react";
import { getOneProduct }  from "../../mockAPI/mockAPI";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer (props) {
    const [producto, setProduct] = useState([])

    const {id} = useParams();

    useEffect (
        () => {
            getOneProduct(id).then ((data) => {
                setProduct(data);
            });
        },[id]
    )
    return(
        <div ClassName="container">
            <ItemDetail producto= {producto}/>
        </div>
    );
}

export default ItemDetailContainer;