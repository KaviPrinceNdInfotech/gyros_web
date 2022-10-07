import React, {useState,useEffect} from "react";
import logo from './logo.png';
import { Link } from "react-router-dom";
import Loginpage from "./Loginpage";
import ProductDetailss from "./Container/ProductDetailss";
export default function NavBar() {
  const [image, setImage] = useState([]);
  const [id, setId] = useState("");
  const getUsers = async (id) => {
    // console.log('https://api.gyros.farm/api/AdminApi/ProductList'+id) 
  const response = await fetch('https://api.gyros.farm/api/AdminApi/ProductList');
  const getUsers = await response.json();
  
  let data = getUsers.result
  // console.log("getUsers",getUsers.result)
  data.map((res)=>{  
        res['Product_Image']="https://api.gyros.farm/Images/" + res.Product_Image
  })
  
  
  setImage(data)
 }

 useEffect(() => {
  // console.log("props",localStorage.getItem('product_id'))
  let p_id = localStorage.getItem("product_id2",id)
  setId(p_id)
   getUsers(p_id);
 }, []);

 function AboutproductDetails(id){ 
  // console.log("dfghj",id)
  localStorage.setItem("product_id2",id)
 }
 
  return ( 
    <div >
      <div class=" color ">
        <marquee> <a class="nav-link disabled"><b> DEAL OF THE DAY || NO COUPON REQUIRED </b></a></marquee>
      </div>

      <div>
      <nav class="navbar ">
        <div class="nav-header ">


          <div class="nav-logo">
            <Link to= "/">
            <img src={logo} width="200" height="150" className='lmg' />
            </Link>
          </div>


        </div>
        <input type="checkbox" id="nav-check" />
        <div class="nav-btn ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
        </div>
        <div class="nav-links ">
          <div class="dropdown ">
            <a href="#" className="shop" >Shop
              <i class="fas fa-angle-down"></i>
              <div class="drop-content shopcontent" style={{ textAlign: "center", width: "180px" }}>

                <div class="row">
                  <div class="col-sm ">
                    <Link to="/Allproducts">
                    <h1 className='allprodtxt' href="#">All Products</h1>
                    </Link>
                    </div>
                    

                    <div class="col-sm">
                    <Link to="/GiftBoxes">
                    <h1 className='allprodtxt' href="#">GiftBoxes</h1>
                    </Link> 
                    </div>
                   
                    
                    <div class="col-sm">
                    <Link to="/Aboutproductdetails">
                    <div >
        {image.map((data,index)=>{

// console.log("data",data.id) 
                      return( 
             <h1 className="categoryname">{data.CategoryName}</h1>
  )
})}
        </div>
                    </Link>
                    </div>
                    
                </div>
                
                
              </div>
            </a>
          </div>

          <div class="dropdown ">
            <a href="#" className="revol" >The Revolution
              <i class="fas fa-angle-down"></i>
              <div class="drop-content" style={{ textAlign: "center", width: "180px" }}>
                <div class="row">
                  <div class="col-sm">
                    <Link to="/Farmers">
                   
                    <h1 className='allprodtxt' href="#">Work With Farmers</h1>
                    </Link>

                    <Link to="/Colaborate">
                    <h1 className='allprodtxt' href="#">Collaboration</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          
          <div class="dropdown">
            <a href="#" >Engagement
              <i class="fas fa-angle-down"></i>
              <div class="drop-content" style={{ textAlign: "center", width: "180px" }}>
                <div class="row">
                  <div class="col-sm">
                    <Link to="/Healthfood">
                  
                    <h1 className='allprodtxt' href="#">Health and Food</h1>
                    </Link>

                    <Link to="/ExixtingReallife">
                    <h1 className='allprodtxt' href="#">Existing Real Life Stories</h1>
                    </Link> 

                    <Link to="/Farmers">
                    <h1 className='allprodtxt' href="#">Farmers Book</h1>
                    </Link>
                    <Link to="/Testimonial">
                  
                    <h1 className='allprodtxt' href="#">Testimonials</h1>
                    </Link>

                    <Link to="/FAQ">
                    <h1 className='allprodtxt' href="#">FAQ's</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <Link to="/BestDeals">
          <a href="#" className="revolution2" >BestDeals</a>
          </Link>
          <a href="https://www.delhivery.com/" target="_blank" className="track">Track Your Orders</a>
          <Link to="/Ourjourney">
            <a href="#" className="journey">Our Journey</a>
            </Link>
          

          <div class="dropdown revolution2">
            <a href="#" >Connect
              <i class="fas fa-angle-down"></i>
              <div class="drop-content" style={{ textAlign: "center", width: "150px" }}>
                <div class="row">
                  <div class="col-sm">

                    <Link to="/Career">
                    
                    <h1 className='allprodtxt' href="#">Career</h1>
                    </Link>

                    <Link to="/Team">
                  
                    <h1 className='allprodtxt' href="#">Team</h1>
                    </Link>

                    <Link to="/Frenchise">
                    
                    <h1 className='allprodtxt' href="#">Frenchise</h1>
                    </Link>

                    <Link to="/Colaborate">
                  
                    <h1 className='allprodtxt' href="#">Collaborate with Us</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>


        <div>
        <ul class="contactlogo ">
          <li>
            <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i class="far fa-user-circle navlogo"></i>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <Loginpage />
              </div>
            </div>
          </li>

          <li className="shopingcartl">
          <Link to="/ProductDetailss">
            <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight5" aria-controls="offcanvasRight">
            <i class="fas fa-cart-plus navlogo1"></i>
            </button>
            </Link>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight5" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h3 class="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h3>
                <h5 className="enjoyshppng">Enjoy Free Shipping on Prepaid Orders!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                < ProductDetailss />
              </div>
            </div>
             
          </li> 
        </ul>
        </div>
      </nav>
    </div>

    </div>
      
    

  )
}