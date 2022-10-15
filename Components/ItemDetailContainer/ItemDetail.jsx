
import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail ({producto}) {
    return (
        <div className="details">
            <FlexWrapper>
                <div className="main-details">
                    <div className="img-details">
                    <img src={producto.img} alt={producto.tittle}/>
                    </div>
                    <h3>{producto.id}</h3>
                    <h5 className= "title-card">{producto.title}</h5>
                    <p>{producto.detail}</p>
                    <h6 price-card>$ {producto.price}</h6>
                    <h6>Stock disponible: {producto.stock}</h6>
                </div>
                <ItemCount stock={producto.stock} initial={1} text="Agregar al carrito" />
            </FlexWrapper>
        </div>
    )
}

export default ItemDetail;