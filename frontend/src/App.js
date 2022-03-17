
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
    const cart = useSelector((state)=>state.addToCard)
    console.log(cart.carItem.length)
    return (
        
        <BrowserRouter>

            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">amazona</a>
                    </div>
                    <div>
                        <Link to="/cart">Card {
                            cart.carItem.length && <span className='badge'>{cart.carItem.length}</span>  
                        } </Link>
                        <Link to="/signin">Sign In</Link>
                    </div>


                </header>
                <main>
                    <Routes>
                    
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/cart/:id/:qty" element={<CartScreen />} />
                    <Route path="/product/:id" element={<ProductScreen />} />
                    </Routes>
                </main>

                <footer className="row center">All Right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
