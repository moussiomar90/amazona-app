import Axios from "axios";
import {PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST} from "../constants/Prodconst";
import {PRODUCT_Details_SUCCESS, PRODUCT_Details_FAIL, PRODUCT_Details_REQUEST} from "../constants/Prodconst";
 
export const listProducts = () => async (dispatch) =>{
    dispatch({type: PRODUCT_LIST_REQUEST });

    try {
        const data = await Axios.get('/api/product')
        dispatch({type: PRODUCT_LIST_SUCCESS, playload: data})
    } 
    catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, playload: error.massage})
    }
}

export const detailsProducts = (productID) => async (dispatch) =>{

    dispatch({type: PRODUCT_Details_REQUEST});

    try {
        const data = await Axios.get(`/api/product/${productID}` )
       
        dispatch({type: PRODUCT_Details_SUCCESS, playload:data.data})
        
    } 
    catch (error) {
        dispatch({type:PRODUCT_Details_FAIL,
             playload: 
             error.response && error.response.data.message
            ? error.response.data.message : error.message   })
    }
}

