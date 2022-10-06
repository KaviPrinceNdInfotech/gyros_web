import React,{useEffect,useState} from "react";
import Carousel from 'react-grid-carousel';
import { Link, useParams } from "react-router-dom";  
import Footer from "./Footer";
import NavBar from "./NavBar";
import HoverImage from "react-hover-image";
export default function ProductsDetails(props){ 
 
      const [image, setImage] = useState([]);
      const [id, setId] = useState("");
      const getUsers = async (id) => {
        console.log("hello",id)
        console.log('https://api.gyros.farm/api/AdminApi/SubcategoryList/'+id)
      const response = await fetch('https://api.gyros.farm/api/AdminApi/SubcategoryList/'+id);
      const getUsers = await response.json();
      // console.log("getUsers",getUsers.result)
      let data = getUsers.result
      data.map((res)=>{
            res['Product_Image']="https://api.gyros.farm/Images/" + res.Product_Image
      })
      
      setImage(data)
     }
    
     useEffect(() => {
      console.log("props",localStorage.getItem('product_id'))
      let p_id = localStorage.getItem('product_id')
      setId(p_id)
       getUsers(p_id);
     }, []);

     function AboutproductDetails(id){ 
      console.log("dfghj",id)
      localStorage.setItem("product_id2",id)
     }
   
    return(

        <>
        <div >
          <NavBar />
        </div>
        <div className="g2desighee">
          <h1 className="g2desighee1">G2 Desi Ghee</h1>
          <h5 class="prodetailcntnt"><b>Feel healthier with our authentic Desi Cow ghee varieties - 
            from the milk of Gir cows in Gujarat and Hallikar cows in Karnataka. 
            It is made with the Vedic method of churning curd into<br></br> butter.
            This gives our ghee the tag of ‘Ayurvedic Superfood’. </b></h5>
          </div>  
      
           

          <Carousel scrollSnap={true} cols={4} rows={1} gap={10} className="row ">
            {console.log("image",image)}
{image.map((data,index)=>{
  
  console.log("data",data.id)
                      return(
                        
        <Carousel.Item className="col-sm-3" >
            <div className="productimg">
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth3" onClick={()=>AboutproductDetails(data.id)} src={data.Product_Image} 
       hoverSrc={data.Product_Image}    />
      </Link>
             
             <h1 className="gheee">{data.ProductName}</h1>
            <div className="row">
                  <div className="col-sm">
                  <a href="#" class="btn btn-primary productdetaills ">Add to Cart </a>

                  <div className="productdetailprice">
                  {/* <h4 className="discount1"> Discount : {data.Discount}%</h4> */}
                  <h4 class="" > Price :{data.Price}₹</h4>
                  </div>
                  
                  </div> 
                  </div>

      </div>   

      
  </Carousel.Item>
)
})}

        </Carousel>
       <div className="footerproductdetail">
            <Footer />
       </div>
        
       </> 
    )
}