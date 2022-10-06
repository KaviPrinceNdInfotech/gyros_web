import React, { useState, useEffect } from "react";
import HoverImage from "react-hover-image/build";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import { data } from "jquery";
export default function Fulldescriptionimage() {

    const [image, setImage] = useState([]);
    const [imagee, setImagee] = useState([]);
    const [id, setId] = useState("");
    const getUsers = async (id) => {
        console.log("hello", id)
        console.log('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id);
        const getUsers = await response.json();
        console.log("getUsers", getUsers)
        let data = getUsers.result
        let imgData = []
        console.log("datartfgyhjk", data)
        data.map((res) => {
            //   let dict={}
            imgData.push(res.multipleImage)
            res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
        })

        let finalData = []
        // console.log("length", imgData[0].length)
        for (var i = 0; i < imgData[0].length; i++) {
            let dict = {}
            console.log("imgData[0][i]", imgData[0][i])
            dict['image'] = "https://api.gyros.farm/Images/" + imgData[0][i]
            finalData.push(dict)
        }
        setImage(finalData)
        setImagee(data)
        console.log("finalData", finalData)

        console.log("abc", data)
    }



    useEffect(() => {
        console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        getUsers(p_id);
    }, []);

    return (
        <div className="row">

            {console.log("imagesdfgh", image)}
            {console.log("imagesdfgh", data)}

            <div className="col-md-4">
                <Carousel scrollSnap={true} cols={1} rows={1} gap={0}>
                    {image.map((data, index) => {
                        console.log("lml",data)
                        return (
                            <Carousel.Item>

                                <HoverImage className="hovrwdthfull" src={data.image}
                                    hoverSrc={data.image} />



                            </Carousel.Item>
                        )
                    })}

            
                </Carousel>

                

                {/* <h6 className="gheeefulldes">{data.ProductName}</h6> */}
                {/* <h6 className="gheeefulldes1">{data.ProductDescription}</h6> */}
                <div>
                </div>
            </div>
           
            <div className="col-md-4 sizecomp">
            {imagee.map((data, index) => {
                        console.log("lml",data)
                        return (

                            <div className="detaildata">
                   <h3 class="abotdetailname" ><b>{data.ProductName}</b></h3>             
                   <h4 class="abotdetailprice" > <b className="priceee">Price</b> : {data.Price}₹</h4>
                <h5 className="sizee"><b>SIZE</b></h5>
                <div className="buttonqty">
                <button class="w3-button w3-ripple w3-yellow btn3">{data.Weight1}</button>
                <button class="w3-button w3-ripple w3-red btn2">{data.Pkt1}</button>
                <button class="w3-button w3-ripple w3-yellow btn3">{data.Qty1}</button>
                </div>
                            </div>
                        )
                    })}
                
                {/* <h6 className="gheeefulldes">{data.ProductName}</h6> */}
                {/* <h6 className="gheeefulldes1">{data.ProductDescription}</h6> */}
            </div>

        </div>
    )
}