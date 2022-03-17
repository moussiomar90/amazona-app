

import React, { useEffect } from 'react';
import Product from '../components/Product';

import { useDispatch,useSelector} from 'react-redux'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/ProductAction';

export default function HomeScreen() {
    const dispatch = useDispatch()
   const productList = useSelector ((state) => state.productList)
  
     const {loading,error,products} = productList ;
     console.log(error)
     
    useEffect(() => {
         
     dispatch(listProducts());

        }, []);

    return (

        <div className="row center">
            {
            loading ? <LoadingBox /> : 
            error ? 
            <MessageBox variant={"danger"} > {error}</MessageBox> :
            (
                products.data.map(product => (
                    <Product key ={product._id}
                        product={product}/>
                ))
            )
        }
            </div>
    )
}
