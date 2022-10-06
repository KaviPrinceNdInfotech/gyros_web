import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import productdetailimage2 from './images/productdetailimage2.jpg';
import productdetailimage3 from './images/productdetailimage3.jpg';
import 'react-multi-carousel/lib/styles.css';
import Fulldescriptionimage from "./Fulldescriptionimage";
export default function Aboutproductdetails() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
            porro quasi culpa nulla rerum quis minus voluptatibus <br></br> sed hic ad quo sint, libero
            commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName = readMore ? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>

    return (

        <>
            <div>
                <NavBar />
            </div>


            <div>
                <Fulldescriptionimage />
            </div>


            <div className="col-sm hallikar">
                <div className="row productdetailicon">

                    <div className="col-sm">
                        <img className="productdetailicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVZp2dJnzqU77_AMOm_u12WXPIZ5CottbwA&usqp=CAU"></img>
                    </div>

                    <div className="col-sm">
                        <img className="productdetailicon" src="https://m.media-amazon.com/images/S/aplus-media/sc/4e5c2cf8-b76e-4dcd-ba2d-85158be33261.__CR0,64,310,310_PT0_SX300_V1___.png"></img>

                    </div>

                    <div className="col-sm">
                        <img className="productdetailicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlj9n9Z5sQmJiPPtwOePsY9USx9dU-plTmeQ&usqp=CAU"></img>
                    </div>

                    <div className="col-sm">
                        <img className="productdetailicon" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/dd88a512-0a75-4411-b50a-5173c1da4bf5.__CR0,0,300,300_PT0_SX300_V1___.jpg"></img>
                    </div>

                </div>

                <h3 className="estimate">DELIVERY ESTIMATE</h3>
                <div className="row">
                    <div className="col-sm">
                        <input className="deliverytext" type="number" placeholder="Enter Pin Code"></input>
                    </div>

                    <div className="col-sm">
                        <button class="w3-button w3-ripple w3-red btnprodet">Check</button>
                    </div>
                </div>
            </div>




            <div className=" prodetcard">
                <button class="w3-button   btnprodet1">+</button>
                <button class="w3-button   btnprodet1">-</button>

                <button class="w3-button w3-ripple  detailcard">Add to Cart</button>
            </div>

            <div className=" col-sm g2textpara">
                <p>Bringing the best of nature to you. Enjoy our G2 ghee<br></br> and wood pressed
                    oil combo  sourced directly from farmers <br></br> of India. Enjoy the
                    authentic aroma and flavour of <br></br> traditionally processed food
                    that are perfect to make  your <br></br> dishes delicious.</p>
            </div>


            <ul class="empower">
                <li className="farmer">
                    <img src="https://t4.ftcdn.net/jpg/05/23/08/83/240_F_523088366_3EoRZ2vDL8vvQED0hOK0PhQZd6Qh9lPt.jpg" width="190px" height="150px" ></img>
                    <h5 className="g2textpara1">2000+ Farmers Empowered</h5>
                </li>

                <li className="farmer1">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/73/49/76/1000_F_473497660_G60EmDLpFZOvPv9yG6ABrxww0KvGn59S.jpg" width="200px" height="150px" ></img>
                    <h5 className="g2textpara1">Procured from Coorg, Uttar Pradesh</h5>
                </li>

                <li className="farmer2">
                    <img src="https://as1.ftcdn.net/v2/jpg/02/39/66/34/1000_F_239663464_nzZIEULQLzFRBEYwAcanmJ2nF2O2VXU8.jpg" width="150px" height="150px" ></img>
                    <h5 className="g2textpara1">18 Lab Tests Done</h5>
                </li>
            </ul>





            <h1 className="whats"><b>What's in it </b></h1>
            <div className="row bothpic">
                <div className="col-sm twopicdetail">
                    <div >
                        <img src={productdetailimage3} width="250" height="250" />
                    </div>
                    <h3 className="G2desighee1">G2 Desi Cow Ghee</h3>
                    <p className="G2desighee">Our bilona churned ghee is made from the<br></br> milk of grass-fed Hallikar cows of Karnataka. <br></br> Made in small batches, the ghee has a fresh<br></br> and tempting flavour. Ghee is thoroughly lab- <br></br>tested using 17 parameters to ensure quality<br></br> standards.</p>
                </div>

                <div className="col-sm twopicdetail1">
                    <div >
                        <img src={productdetailimage2} width="250" height="250" />
                    </div>
                    <h3 className="G2desighee1">Black Mustard Oil</h3>
                    <p className="G22desighee">
                        Our Black Mustard oil is extracted by wood<br></br> pressing best quality mustard from the farms <br></br>in Uttar Pradesh. Packed with essential <br></br>nutrients, our cold-pressed oil is an excellent<br></br> addition to your kitchen and your health.
                    </p>
                </div>

            </div>
            .
            <h1 className="howto"><b>How To Use It?</b></h1>
            <div>


                <div className="row">

                    <div className="col-sm-4 col-md-4">
                        <img className="howto" src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/gheep02_600x.png?v=210256254869311758" width="350" height="350"></img>

                        <h3 className="G2desighee4"><b>Apply on Rotis</b></h3>
                        <p className="G2desighee3">
                            Apply ghee on tawa fresh rotis and parathas to <br></br>make them more moist and digestible.
                        </p>
                    </div>


                    <div className="col-sm-4 col-md-4">

                        <img className="howto" src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/gircow2_600x.png?v=296450709290826835" width="350" height="350"></img>

                        <h3 className="G2desighee4"><b>Apply on Rotis</b></h3>
                        <p className="G2desighee3">
                            Apply ghee on tawa fresh rotis and parathas to <br></br> make them more moist and digestible.
                        </p>
                    </div>

                    <div className="col-sm-4 col-md-4">

                        <img className="howto" src="https://cdn.shopify.com/s/files/1/0270/3346/9006/files/gheep03_600x.png?v=1629979877514540171" width="350" height="350"></img>


                        <h3 className="G2desighee4"><b>Apply on Rotis</b></h3>
                        <p className="G2desighee3">
                            Apply ghee on tawa fresh rotis and parathas to <br></br> make them more moist and digestible.
                        </p>
                    </div>

                </div>

            </div>
            <h3 className="allinone"><b>All in One Solution</b></h3>
            <div>


                <div className="row">

                    <div className="col-sm-4 col-md-4">
                        <div >
                            <img className="howto" src={productdetailimage2} width="350" height="350" />
                        </div>
                        <h3 className="G2desighee4"><b>Healthy Cooking Oil</b></h3>
                        <p className="G2desighee3">
                            Use ghee as a cooking oil to make your dishes <br></br> richer, satiating, and delicious.
                        </p>
                    </div>


                    <div className="col-sm-4 col-md-4">
                        <div >
                            <img className="howto" src={productdetailimage2} width="350" height="350" />
                        </div>
                        <h3 className="G2desighee4"><b>Apply on Rotis</b></h3>
                        <p className="G2desighee3">
                            Apply ghee on tawa fresh rotis and parathas to make <br></br>them more moist and digestible.
                        </p>
                    </div>

                    <div className="col-sm-4 col-md-4">
                        <div >
                            <img className="howto" src={productdetailimage2} width="350" height="350" />
                        </div>
                        <h3 className="G2desighee4"><b>Ghee And Milk</b></h3>
                        <p className="G2desighee3">
                            Consume ghee with warm milk to help build <br></br>your strength and keep your gut healthy.
                        </p>
                    </div>

                </div>
            </div>
            <h1 className="frequentlyheading" >Frequently Asked Questions</h1>
            <div>
                <div className="row">

                    <div className="col-sm">
                        <p className="frequentlypara"><b>
                            Why is Anveshan Desi Cow Ghee costly as compared to other ghee?
                        </b></p>
                    </div>

                    <div className="col-sm">
                        <div className="App shiftplus">
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm">
                        <p className="frequentlypara"><b>Does Anveshan ghee come in a plastic jar?</b></p>
                    </div>
                    <div className="col-sm">
                        <div className="App shiftplus">
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2>
                                {readMore && extraContent}</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <p className="frequentlypara"><b>How is the taste of your ghee different from any other ghee in the market?</b></p>
                    </div>
                    <div className="col-sm">
                        <div className="App shiftplus">
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <p className="frequentlypara"><b>What are cows being fed?</b></p>
                    </div>
                    <div className="col-sm">
                        <div className="App shiftplus">
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <p className="frequentlypara"><b>How can we identify pure cow ghee?</b></p>
                    </div>
                    <div className="col-sm">
                        <div className="App shiftplus">
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <p className="frequentlypara"><b>What should the consistency of my ghee be?</b></p>
                    </div>
                    <div className="col-sm ">
                        <div className=" shiftplus ">
                            <a className="" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                        </div>
                    </div>
                </div>


            </div>

            <div className="footerproductdetail">
                < Footer />
            </div>
        </>
    )
}