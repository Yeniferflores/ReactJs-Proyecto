import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props){
    return <>
    <FlexWrapper>
    {props.productList.map( (prod) => {
            return <Card 
            id={prod.id}
            title= {prod.title} 
            img={prod.img} 
            detail={prod.detail} 
            price={prod.price} 
            stock={prod.stock}/>
        }) }
    
    </FlexWrapper>
</>;

}

export default ItemList;