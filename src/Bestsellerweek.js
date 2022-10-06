import React, {useState,useEffect} from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom"; 
import HoverImage from "react-hover-image";

export default function Addtocart(){ 
      const [image, setImage] = useState([]);
      const [id, setId] = useState("");
      const getUsers = async (id) => { 
        // console.log('https://api.gyros.farm/api/AdminApi/FlashSale/'+id) 
      const response = await fetch('https://api.gyros.farm/api/AdminApi/FlashSale/');
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
   
    
    return(

        <div className="weeekbstlr"> 
        <h4 className="week  bestseller"><b>Bestsellers of The Week</b></h4>
        <p className="bestseller wholesome">Natural and Wholesome</p>
        
        <Carousel scrollSnap={true} cols={4} rows={1} gap={10} >
        {image.map((data,index)=>{
 
// console.log("data",data.id) 
                      return( 
        <Carousel.Item>
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdthbstslr" onClick={()=>AboutproductDetails(data.Id)} src={data.Product_Image} 
       hoverSrc={data.Product_Image}    />
      </Link>  
             <h1 className="gheee">{data.ProductName}</h1>
            <div className="row">
                  <div className="col-sm">
                    <Link to="/ProductListing">
                  <a href="#"  class="btn btn-primary addtocartbstslr ">Add to Cart </a>
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
        </div>

        
    
      

        
    )
}