import React from "react";
import Carousel from 'react-grid-carousel';
 import { Link } from "react-router-dom";
 import NavBar from "./NavBar";
 import productdetailimage2 from './images/productdetailimage2.jpg';
 import productdetailimage3 from './images/productdetailimage3.jpg';
 import HoverImage from "react-hover-image";
export default function Explore(){
  
    return(

        <>
     <div>
      <NavBar />
     </div>
     <div class="row">
      <div class="col-sm">
        
          </div>
      <div class="col-sm">

      </div>
      <div class="col-sm">

      </div>
      <div class="col-sm">

      </div>

     </div>
   <h1>Super Foods</h1>
   
   <div>

    {/* <div>
    <Carousel  cols={4} rows={1} gap={10} class="row">  
  <Carousel.Item>
  <div class="col-sm">
  <img src="https://img.freepik.com/premium-photo/ghee-clarified-butter-jar-wooden-spoon-blue-background-top-view-copyspace-ghee-butter-have-healthy-fat-is-common-cooking-ingredient-many-indian-food_80373-1715.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
    
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  

  </div>
  </div>
  </Carousel.Item>

  <Carousel.Item>
  <div class="col-sm">
       <img src="https://img.freepik.com/premium-photo/ghee-butter-glass-jar-with-wooden-spatula-whole-grain-bread-slice-blurred-background_491130-96.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
    
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  

  </div>
  </div>
  </Carousel.Item>
  
  <Carousel.Item>
     <div class="col-sm">
       <img src="https://img.freepik.com/free-photo/top-view-delicious-cream-soup-yellow-colored-soup-white-desk-soup-sauce-meal-cream-dinner-dish_140725-96355.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
    
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  

  </div>
  </div>
  </Carousel.Item>

  <Carousel.Item>
  <div class="col-sm ">
       <img  src="https://img.freepik.com/premium-photo/ghee-butter-from-india-white-dinnerware-container-wooden-table_491130-47.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  
  </div>
  </div>  
  </Carousel.Item>
  </Carousel>
    </div>
        
     <div className="scndrow">
     <Carousel  cols={4} rows={1} gap={10} class="row ">  
  <Carousel.Item>
  <div class="col-sm">
  <img src="https://img.freepik.com/premium-photo/ghee-clarified-butter-jar-wooden-spoon-blue-background-top-view-copyspace-ghee-butter-have-healthy-fat-is-common-cooking-ingredient-many-indian-food_80373-1715.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
    
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  

  </div>
  </div>
  </Carousel.Item>

  <Carousel.Item>
  <div class="col-sm">
       <img src="https://img.freepik.com/premium-photo/ghee-butter-glass-jar-with-wooden-spatula-whole-grain-bread-slice-blurred-background_491130-96.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
    
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  

  </div>
  </div>
  </Carousel.Item>
  
  <Carousel.Item>
     <div class="col-sm">
       <img src="https://img.freepik.com/free-photo/top-view-delicious-cream-soup-yellow-colored-soup-white-desk-soup-sauce-meal-cream-dinner-dish_140725-96355.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
    
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  

  </div>
  </div>
  </Carousel.Item>

  <Carousel.Item>
  <div class="col-sm ">
       <img  src="https://img.freepik.com/premium-photo/ghee-butter-from-india-white-dinnerware-container-wooden-table_491130-47.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={290} height={360} />
       <div class="row">
       <h6 class="kashmiribadam6"><i>GyroS Desi Ghee</i></h6> 
       <div class="testimonials--star-wrapper shft-fa">
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      <i class="fa fa-star fa-lg" aria-hidden="true"></i>
      </div>
      <div >
      <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
      </div>  
  </div>
  </div>  
  </Carousel.Item>
  </Carousel>
     </div> */}
        

        <div>
        <Carousel className="row"  cols={4} rows={1} gap={3}>
        <Carousel.Item class="col-sm">
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3} 
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      </Carousel.Item>
       
      <Carousel.Item class="col-sm">
      <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3} 
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      </Carousel.Item>

      <Carousel.Item class="col-sm">
      <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3}
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      </Carousel.Item>

      <Carousel.Item class="col-sm">
      
      <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3}  
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      
      </Carousel.Item>
        </Carousel>
        </div>

        <div className="scndrow">
        <Carousel className="row"  cols={4} rows={1} gap={3}>
        <Carousel.Item class="col-sm">
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3} 
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      </Carousel.Item>
       
      <Carousel.Item class="col-sm">
      <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3} 
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      </Carousel.Item>

      <Carousel.Item class="col-sm">
      <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3}
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      </Carousel.Item>

      <Carousel.Item class="col-sm">
      
      <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={productdetailimage3}  
       hoverSrc={productdetailimage2}    />
      </Link>
       <h6 class="kashmiribadam1">STONE PRESSED <br></br> <b>COCONUT OIL</b></h6> 
             <div class="testimonials--star-wrapper shft-fa1">
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            <i class="fa fa-star fa-lg" aria-hidden="true"></i>
            </div>
            <div >
            <a href="#" class="btn btn-primary addtocart3 ">Add to Cart </a>   <p class="rupee1" >₹ - 799</p>  
            </div> 
      
      </Carousel.Item>
        </Carousel>
        </div>
        
        </div>


</>
    )
}