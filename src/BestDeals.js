
import React, {useState,useEffect} from "react";
import Carousel from 'react-grid-carousel';
 import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer"; 
import HoverImage from "react-hover-image/build";
export default function BestDeals(){

      const [image, setImage] = useState([]);
      const getUsers = async () => {
      const response = await fetch('https://api.gyros.farm/api/AdminApi/BestSale');
      const getUsers = await response.json();
      let data = getUsers.result 
      data.map((res)=>{
            res['Product_Image']="https://api.gyros.farm/Images/" + res.Product_Image
      })
      
      setImage(data)
     }
    
     useEffect(() => {
       getUsers();
     }, []);
  
    return(
        <>
    <div> 
      < NavBar />
    </div>

   <h1 class="Dealsbst">Best Deals</h1>

   <Carousel scrollSnap={true} cols={4} rows={1} gap={10} >
        {image.map((data,index)=>{
                      return(
        <Carousel.Item className="" >

            <div >
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={data.Product_Image} 
       hoverSrc={data.Product_Image}    />
      </Link>
             
             <h1 className="gheee">{data.ProductName}</h1>
            <div className="row">
                  <div className="col-sm">

                    <Link to="/Cart">
                  <a href="#" class="btn btn-primary addtocartbst ">Add to Cart </a>
                  </Link>

                  <div className="dstc">
                  <h4 className="discount1"> Discount : {data.Discount}%</h4>
                  <h4 class="discount1" > Price :{data.Price}₹</h4>
                  </div>
                  
                  </div> 
                  </div>

     </div> 


  </Carousel.Item>
  
  )
})}

        </Carousel>
   
        <div className="gheefilef">
        <Footer />
        </div>
</>
    )
}