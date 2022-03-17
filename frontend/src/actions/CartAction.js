import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/Cardconst"

export const addToCart = (productID,qty) => async (dispatch,getState) =>{

   

    try {
        const data = await axios.get(`/api/product/${productID}`)
     
        dispatch({type:CART_ADD_ITEM, playload:
            {
                name:data.data.name,
                image: data.data.image,
                price: data.data.price,
                countInStock :data.data.countInStock, 
                produit : data.data._id,
                qty 
            }})
        localStorage.setItem('carItem',JSON.stringify(getState().addToCard.carItem))
    } 
    catch (error) {
       console.log(error)
    }
}

export const removeFromCart = (productID) => async (dispatch,getState) =>{
  
        dispatch({type: CART_REMOVE_ITEM, playload:productID}) ;
        localStorage.setItem('carItem',JSON.stringify(getState().addToCard.carItem))
}