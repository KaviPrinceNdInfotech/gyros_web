import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Loginpage from './Loginpage';
// import Cart from "./Components/Cart";
import Home from './home';
import Shoppingcart from './Shoppingcart';
import Blog from './Blog';
import Searchpage from './Searchpage';
import Createaccount from './Createaccount';
import Forgetpass from './Forgetpass';
import Mobilelogin from './Mobilelogin';
import Emaillogin from './Emaillogin';
import Pinpage from './Pinpage';
import Confirmpass from './Confirmpass';
import Verification from './Verification';
import { BrowserRouter } from 'react-router-dom';
import GiftBoxes from './GiftBoxes';
import Ourjourney from './Ourjourney';
import ProductDetails from './ProductDetails';
import Explore from './Explore';
import Allproducts from './Allproducts';
import Ghee from './Ghee';
import Organicseeds from './Organicseeds';
import Naturalhoney from './Naturalhoney';
import Combos from './Combos';
import BestDeals from './BestDeals';

import Career from './Career';
import Aboutproductdetails from './Aboutproductdetails';
import Video from './Video';
import Team from './Team';
import Frenchise from './Frenchise';
import Healthfood from './Healthfood';
import Colaborate from './Colaborate';
import ExixtingReallife from './ExistingReallife';
import Farmers from './Frammers';
import Testimonial from './Testimonial';
import FAQ from './FAQ';
import Fulldescriptionimage from './Fulldescriptionimage'
import Popup from "./Popup";
import ProductListing from "./Container/ProductListing";
import ProductDetailss from "./Container/ProductDetailss";
import Headers from "./Container/Headers";
import "./cart.css";

export default function App () {
  return (
<>

<Router>

  
           <div className="App">
           <Routes>

           {/* <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route> */}
          <Route exact path='/ProductListing' element={< ProductListing />}></Route>
          <Route exact path='/product/:productId' element={< ProductDetailss />}></Route>
                 <Route exact path='/Testimonial' element={< Testimonial />}></Route>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Fulldescriptionimage' element={< Fulldescriptionimage />}></Route>
                 <Route exact path='/Popup' element={< Popup />}></Route>   
                 <Route exact path='/FAQ' element={< FAQ />}></Route>
                 <Route exact path='/Farmers' element={< Farmers/>}></Route>
                 <Route exact path='/Farmers' element={< Farmers />}></Route>
                 <Route exact path='/ExixtingReallife' element={< ExixtingReallife />}></Route>
                 <Route exact path='/Team' element={< Team />}></Route>
                 <Route exact path='/Healthfood' element={< Healthfood />}></Route>
                 <Route exact path='/Career' element={< Career />}></Route>
                 <Route exact path='/Video' element={< Video />}></Route>
                 
                 <Route exact path='/login' element={< Loginpage />}></Route>
                 <Route exact path='/Shoppingcart' element={< Shoppingcart />}></Route>
                 <Route exact path='/Searchpage' element={< Searchpage />}></Route>
                 <Route exact path='/createaccount' element={< Createaccount />}></Route>
                 <Route exact path='/forgetpass' element={< Forgetpass />}></Route>
                 <Route exact path='/Mobilelogin' element={< Mobilelogin />}></Route>
                 <Route exact path='/Emaillogin' element={< Emaillogin />}></Route>
                 <Route exact path='/Pinpage' element={< Pinpage />}></Route>
                 <Route exact path='/Confirmpass' element={< Confirmpass />}></Route>
                 <Route exact path='/Verification' element={< Verification />}></Route>
                 <Route exact path='/GiftBoxes' element={< GiftBoxes />}></Route>
                 <Route exact path='/Blog' element={< Blog />}></Route>
                 <Route exact path='/Ourjourney' element={< Ourjourney />}></Route>
                 <Route exact path='/ProductDetails' element={< ProductDetails />}></Route>
                 <Route exact path='/Explore' element={< Explore />}></Route>
                 <Route exact path='/Allproducts' element={< Allproducts />}></Route>
                 <Route exact path='/Ghee' element={< Ghee />}></Route>
                 <Route exact path='/Organicseeds' element={< Organicseeds />}></Route>
                 <Route exact path='/Naturalhoney' element={< Naturalhoney />}></Route>
                 <Route exact path='/Combos' element={< Combos />}></Route>
                 <Route exact path='/BestDeals' element={< BestDeals />}></Route>
                 <Route exact path='/Frenchise' element={< Frenchise />}></Route>
                 <Route exact path='/Colaborate' element={< Colaborate />}></Route>
                 <Route exact path='/Aboutproductdetails' element={< Aboutproductdetails />}></Route>
                 
          </Routes>
          </div>
       </Router>
    </>  

    

  );
}