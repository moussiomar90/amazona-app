import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {productReducer} from '../src/reducers/productReducer'
import {productDetailsReducer} from '../src/reducers/productReducer';
import {cartReducer} from '../src/reducers/cartReducer'
import thunk from 'redux-thunk'

const initialState = {
    addToCard:{
        carItem: localStorage.getItem('carItem') 
    ? JSON.parse(localStorage.getItem('carItem')) : [] ,
    },
 
    
};

const reducer = combineReducers({productList: productReducer, productDetails: productDetailsReducer, addToCard: cartReducer})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;
