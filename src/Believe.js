import React from "react";
import Carousel from 'react-grid-carousel'

export default function Believe(){
     
    return(
        
     <div className="webelieve">
        <h1 className="Believe">We Believe In</h1>

        <Carousel  cols={4} rows={1} gap={10}>
        <Carousel.Item>
        <div className="wholeauthen" >
          
             <img src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/authenticity_300x.png?v=1648616970" width={150} height={140} />
             <h5 className="authcolor">AUTHENTICITY</h5>
             <p className="belevetxt">Bringing purest form of food direct <br></br>from the farms</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div  className="wholeauthen1">
            
             <img src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/tradition-culture_300x.png?v=1648616970" width={150} height={140} />
             <h5 className="authcolor1">TRADITION</h5>
             <p className="belevetxt">Harnessing age-old wisdom <br></br>passed down by Grandmas</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="wholeauthen2">
           
             <img src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/brutal-honesty_300x.png?v=1648616970" width={150} height={140} />
             <h5 className="authcolor2">BRUTAL HONESTY</h5>
             <p className="belevetxt">Being 100% transparent & <br></br> thoroughly lab-tested</p>
        </div>
        </Carousel.Item>
           <Carousel.Item>
        <div className="wholeauthen3" >
       
             <img src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/purpose_300x.png?v=1648616970" width={150} height={140} />
             <h5 className="authcolor3">PURPOSE</h5>
             <p className="belevetxt">Empowering rural India with <br></br>employment & fair trade</p>
        </div>
        </Carousel.Item>
                 </Carousel>
 
                 </div>
    )
}