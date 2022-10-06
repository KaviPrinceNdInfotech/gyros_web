
import React, {useState,useEffect} from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import HoverImage from "react-hover-image";
import picone from './images/picone.jpg';
import pictwo from './images/pictwo.jpg';
import Footer from "./Footer";
export default function GiftBoxes() {
      const [image, setImage] = useState([]);
      const getUsers = async () => {
      const response = await fetch('https://api.gyros.farm/api/AdminApi/Gift');
      const getUsers = await response.json();
      let data = getUsers.result
      data.map((res)=>{
            res['ImageName']="https://api.gyros.farm/Images/" + res.ImageName
      })
      
      
      setImage(data)
     }
    
     useEffect(() => {
       getUsers(); 
     }, []);


  return (

    <> 

       <div>
        <NavBar />
      </div>
      <div className="giftboxess">
        <h1 class="giftbox">GiftBoxes</h1>
        <p class="buy allprotext">
          Buy from a range of premium and healthy gift box options at GyroS
        </p>
      </div> 

      <Carousel scrollSnap={true} cols={4} rows={1} gap={10} >
        {image.map((data,index)=>{
                      return(
        <Carousel.Item>
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={data.ImageName} 
       hoverSrc={data.ImageName}    />
      </Link>  
             <h1 className="gheee">{data.Name}</h1>
            <div className="row">
                  <div className="col-sm">
                    <Link to="/Cart">
                  <a href="#" class="btn btn-primary addtocartbstslr ">Add to Cart </a>
                  </Link>
                  <div className="dstc">
                  <h4 className="discount1"> Discount : {data.Discount}%</h4>
                  <h4 class="discount1" > Price :{data.Price}₹</h4>
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