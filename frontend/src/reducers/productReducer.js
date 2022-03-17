import {PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST} from "../constants/Prodconst";
import {PRODUCT_Details_SUCCESS, PRODUCT_Details_FAIL, PRODUCT_Details_REQUEST} from "../constants/Prodconst";

export const productReducer = (state= {loading : true ,error :false,products :[]} ,action)=>{
switch (action.type) {
    case PRODUCT_LIST_REQUEST:
        
        return {loading:true};

    case PRODUCT_LIST_SUCCESS:
        
        return {loading: false ,products : action.playload};

    case PRODUCT_LIST_FAIL:
        
            return {loading:false,error:action.playload};
    
    default:
       return  state;
}}

export const productDetailsReducer = (state= {loading : true ,error :false,product:['ok']} ,action)=>{
    switch (action.type) {
        case PRODUCT_Details_REQUEST:
            
            return {loading:true};
    
        case PRODUCT_Details_SUCCESS:
            
            return {loading: false ,product:action.playload};
    
        case PRODUCT_Details_FAIL:
            
                return {loading:false,error:action.playload };
        
        default:
           return  state;
    }}
    