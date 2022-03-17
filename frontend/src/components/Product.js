import { useState } from "react"
import Rating from "./Rating"
import { Link } from "react-router-dom"
export default function Product (props){

const {product}=props


    return (<div className="card" key={product._id}>
    <Link to={"/product/"+product._id} >
        <img className="medium" src={product.image} alt=""/>
    </Link>
    
    <div className="classcard-body">
        <Link to="product.html">
            <h2>{
                product.name
            }</h2>
        </Link>
        <Rating rating={product.rating} review={product.numReviews}/>
        <div className="price">
        {
                product.price
            }$</div>
    </div>
    
    </div>)
}

