import React from "react";
import HoverImage from "react-hover-image";
import { useState,useEffect } from "react";
 import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
export default function VideoSlider(){
    const [image, setImage] = useState([]);
    const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/AdminApi/GifList');
    const getUsers = await response.json();
    let data = getUsers.result
    data.map((res)=>{
          res['GifName']="https://api.gyros.farm/Images/" + res.GifName
    })
    
    setImage(data) 
   }  
  
   useEffect(() => {
     getUsers(); 
   }, []);
   function productDetails(id){ 
    console.log("dfghj",id)
    localStorage.setItem("product_id",id)
   } 
    return(
           <div className="featuredcollection">
        <h4 className="ftr"><b>Featured Collection</b></h4>
        <h6 className="strt gifslide">Straight from the Villages</h6>
        <Carousel scrollSnap={true} cols={4} rows={1} gap={10} className="row ">
{image.map((data,index)=>{
                      return(
        <Carousel.Item className="col-sm-3" >
            <div>
            <Link to="/productdetails">
      <HoverImage className="hovrwdthvidsldr" src={data.GifName} 
       hoverSrc={data.GifName}/>
       </Link>
                  <div >
                  <Link to="/productdetails">
                  <a href="#" onClick={()=>productDetails(data.Id)} class="btn btn-primary addtocart3 ">Explore</a>
                  </Link>
                  </div> 
      </div>       
  </Carousel.Item>
)
})}
        </Carousel> 
        </div>
    )
}



