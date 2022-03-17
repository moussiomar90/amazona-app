import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/Cardconst";

export const cartReducer = (state={ carItem:[] },action)=>{

switch (action.type) {
    case CART_ADD_ITEM:
        const item = action.playload
        const existItem = state.carItem.find((x)=> x.produit === item.produit)
       
        if (existItem){
           return {... state,
            carItem: state.carItem.map((x)=> 
            
            x.produit === existItem.produit ? item : x
            ),
        
        }
        }
        else 
        {
            return {
                ...state ,carItem: [...state.carItem,item]
            };
        }
       
      case  CART_REMOVE_ITEM : 
      

      return {
        ...state ,carItem:state.carItem.filter((x)=>x.produit !== action.playload)
    };

    default:
        return state
}

}