
import React, {useEffect, useState} from 'react'
import { ControlBar, Player } from "video-react";

import Footer from "./Footer";
import NavBar from "./NavBar";
// import { Link } from "react-router-dom";
export default function Ourjourney(){

  const [users, setUsers] = useState([]);
  const [video, setVideo] = useState([]);
  const [imgstr, setImg]= useState("");
  const [flag, setFlag]=useState(false);

 const getUsers = async () => {
  const response = await fetch('https://api.gyros.farm/api/ProductApi/Video');
  const getUsers = await response.json();
  let temp =[]
  let img =[]
  let d1=""
  console.log(getUsers);
  temp.push(getUsers)
  setUsers(temp);
  console.log("data",temp)
  temp.map( (retusers,index) => {
    console.log("path",retusers)
    retusers.result.map((data)=>{
      console.log("data.video",data.Video1)
        img.push("https://api.gyros.farm/Images/" + data.Video1.replaceAll(" ", '%20'))
      })
    })
    console.log("img",img)
    setImg(img)
  setVideo(img)
  setFlag(true)
 }

 useEffect(() => {
   getUsers(); 
 }, []);

  
    return(

        <>
     <div>
      <NavBar />
     </div>


   <div>
   <div class="aboutbanner">
            <img src="https://img.freepik.com/premium-photo/hand-planting-corn-seed-marrow-vegetable-garden-with-sunshine_34152-1616.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width="100%" height="501" />
            <div class="text center banner1"><b><i><small>Our Mission</small><br></br>Being Your Trustworthy and Transparent Food Partner</i></b></div>
          </div>
    <div class="row">
<div class="col-sm lorem">
     <img src="https://img.freepik.com/premium-photo/ghee-clarified-butter-jar-wooden-spoon-wooden-table_123827-12033.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={450} height={550} class="vdoslide" />
     </div>
     <div class="col-sm ">
        <h1 class="offer heading">
        What Do We Offer?
        </h1>
     <h6 class="ipsum"> Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled
         it to make a type 
        specimen book. It has survived not only five centuries,
         but also the leap into 
        electronic typesetting, remaining essentially unchanged.
         It was popularised in 
        the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, 
        and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.
               </h6> 
               <h6 class="ipsum1">
               Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled
         it to make a type 
        specimen book. It has survived not only five centuries,
         but also the leap into 
        electronic typesetting, remaining essentially unchanged.
         It was popularised in 
        the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, 
        and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.
               </h6>
               <h6 class="ipsum1">
               Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled
         it to make a type 
        specimen book. It has survived not only five centuries,
         but also the leap into 
        electronic typesetting, remaining essentially unchanged.
         It was popularised in 
        the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, 
        and more recently with desktop publishing software
         like Aldus PageMaker including versions of Lorem Ipsum.
               </h6>
   </div> 

   <h1 class="g2desighee">Our Journey So Far</h1>
   <React.Fragment>
             
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-inner">
            {console.log("video",video[0])}
            {flag === true && (
                    
                         <div className="carousel-item active">
                         
                         <Player
                            playsInline
                            fluid={false}
                            height={500}
                            width="100%"
                          >
                            <source src={video[0]} />
                            <ControlBar autoHide={false} />
                          </Player>
                              
                      </div>
                      )}
                
     
               </div>
             </div>
             </React.Fragment>
</div>
</div>
<div class="aboutfooter"> 
<Footer />
</div>
</>
    )
}