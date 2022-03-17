import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {addToCart, removeFromCart} from '../actions/CartAction'
import {Link} from 'react-router-dom'
import MessageBox from '../components/MessageBox'
import {CART_ADD_ITEM} from '../constants/Cardconst'

export default function CartScreen() {
    const params = useParams()
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.addToCard)
    console.log(cart.carItem)
    useEffect(() => {
        dispatch(addToCart(params.id, parseInt(params.qty)))
    }, [dispatch])
    function removeFromHundler(id) {
        dispatch(removeFromCart(id))
    }
    function checkoutHundler() {}
    return (

        <div>
            <div className='row top'>
                <div className='col-2'>
                    <h1>Shopping Cart</h1>
                    {
                    cart.carItem.length === 0 ? (
                        <MessageBox>
                            Cart Is empty
                        </MessageBox>
                    ) : <ul> {
                            cart.carItem.map((item, key) => (
                                <div className='row'
                                    key={key}>
                                    <div>
                                        <img src={
                                                item.image
                                            }
                                            alt={
                                                item.name
                                            }
                                            className="small"></img>
                                    </div>
                                    <div className='min-30'>
                                        <Link to={
                                            `/product/${
                                                item.produit
                                            }`
                                        }>
                                            {
                                            item.name
                                        }</Link>
                                    </div>
                                    <div>
                                        <select value={
                                                item.qty
                                            }
                                            onChange={
                                                e => dispatch(addToCart(item.produit, Number(e.target.value)))
                                        }>

                                            {
                                            [...Array(item.countInStock).keys()].map((x) => (
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
                                    <div>${
                                        item.price
                                    }</div>
                                    <div>
                                        <button type='button'
                                            onClick={
                                                () => removeFromHundler(item.produit)
                                        }>Delete</button>
                                    </div>
                                </div>
                            ))
                        } </ul>
                } </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <h2>
                                    Subtotal ({
                                    cart.carItem.reduce((a, c) => a + c.qty, 0)
                                }
                                    items ) : $ {
                                    cart.carItem.reduce((a, c) => a + c.price * c.qty, 0)
                                } </h2>
                            </li>
                            <li>
                                <button type='button'
                                    onClick={checkoutHundler}
                                    className="primary block"
                                    disabled
                                    ={cart.carItem.length <=0}>Pay</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
