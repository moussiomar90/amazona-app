import {data} from "../data"
import {useNavigate, useParams} from "react-router-dom";
import Rating from "../components/Rating";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {detailsProducts} from "../actions/ProductAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
export default function ProductScreen(props) {
    const params = useParams();
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1)
    const productDetails = useSelector((state => state.productDetails))
    const {loading, error, product} = productDetails
    console.log(product)
const navigate = useNavigate ()
    useEffect(() => {

        dispatch(detailsProducts(params.id))
    }, [])
    function sendToCart(e){
        
navigate(`/cart/${params.id}/${qty}`)
    }
    return (
        <div>

            <Link to='/'>back to result</Link>
            {
            loading ? <LoadingBox/>: error ? <MessageBox variant={"danger"}>
                {error}</MessageBox> : (
                <div className="row top">
                   
                    <div className="col-2">
                        <img className="large" src="/images/p1.jpg"/>
                    </div>
                    <div className="col-1">

                        <ul>
                            <li>
                                <h1>{
                                    product.name
                                }</h1>
                            </li>
                            <Rating rating={
                                    product.rating
                                }
                                review={
                                    product.numReviews
                                }/>
                            <li>Price {
                                product.price
                            }</li>
                            <li>Desription :{
                                product.description
                            }</li>

                        </ul>

                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${
                                            product.price
                                        }</div>
                                    </div>


                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>{
                                            product.countInStock > 0 ? <div className="success">Available
                                            </div> : <div className="error">Not Available
                                            </div>
                                        }</div>
                                    </div>
                                </li>
                                {
                                product.countInStock > 0 ? <li>
                                    <div className="row">
                                        <div>Qty</div>
                                        <div>
                                            <select onChange={
                                                (e) => setQty(e.target.value)
                                            }>
                                                {
                                                [...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x}
                                                        value={
                                                            x + 1
                                                    }>
                                                        {
                                                        x + 1
                                                    }</option>
                                                ))
                                            } </select>

                                        </div>
                                    </div>
                                </li> : ''
                            }
                                <li> {
                                    product.countInStock > 0 ? <button className="primary block" onClick={sendToCart}>Add to Cart</button> : ''
                                } </li>
                            </ul>
                        </div>
                    </div>


                </div>
            )
        } </div>
    )
}
