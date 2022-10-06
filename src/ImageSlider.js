import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
export default function ImgSlider(){

  const [users, setUsers] = useState([]);
  const [image, setImage] = useState([]);
  const [imgstr, setImg]= useState("");

 const getUsers = async () => {
  const response = await fetch('https://api.gyros.farm/api/AdminApi/BannerImage');
  const getUsers = await response.json();
  let temp =[]
  let img =[]
  let d1=""
  // console.log(getUsers);
  temp.push(getUsers)
  setUsers(temp);
  // console.log("data",users)
  temp.map( (retusers,index) => {
    // console.log("path",retusers)
    retusers.BannerImageList.map((data)=>{
        img.push("https://api.gyros.farm/Images/" + data)
      })
    })
    // console.log("img",img)
    setImg(img[0])
  setImage(img)
 }

 useEffect(() => {
   getUsers();
 }, []);


  
    return(
           
      <React.Fragment>
             
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        {/* { console.log("hjk",{imgstr})} */}
                     {image.map((data,index)=>{
                      return(
                    <div className={index==0?"carousel-item active":"carousel-item"}>
                    
                        <img src={data} alt="image"  class="img" />
                      
                      {/* <div> {console.log("hello","https://api.gyros.farm/Images/"+data)}</div> */}
                        
                 </div>
                 )
                })}

          </div>
         
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </React.Fragment>
    )
}