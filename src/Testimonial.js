import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./testimonial.css"
export default function Testimonial() {
    return(
        <>
        
          <div>
            < NavBar />
          </div>

          {/* <nav className="fstsec">

<div>
    <h1 className="fstcareer">Testimonial</h1>
</div>

<div className="careerscndhead6">
    <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Testimonial</b></h3>
</div>

</nav> */}

<section class="testimonial text-center">
        <div class="container">

            <div class="heading white-heading">
                Testimonial
            </div>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 1</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 2</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 3</h4>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>


<div class="testimonials">
      
        <div class="test-body">
            <div class="item">
                <img src="https://livedemo00.template-help.com/wt_prod-10943/images/testimonials-1-120x120.jpg" />
                <div class="name">Matthew Perkins</div>
                <small class="desig">Driver</small>
                <div class="share"><i class="fa fa-facebook"></i><i class="fa fa-twitter"></i><i class="fa fa-instagram"></i></div>
                <p>Just had my laptop resurrected and the engineer was fantastic. Very patient, very knowledgeable and knew exactly what he was doing. If I ever have another computer problem, I'll definitely give these guys a call. They are professionals and they have great customer service. Great price, great job, thanks a lot!</p>
            </div>
            <div class="item">
                <img src="https://livedemo00.template-help.com/wt_prod-10943/images/testimonials-2-120x120.jpg" />
                <div class="name">Elizabeth Johnson</div>
                <small class="desig">Real Estate agent</small>
                <div class="share"><i class="fa fa-facebook"></i><i class="fa fa-twitter"></i><i class="fa fa-instagram"></i></div>
                <p>My friend recommended Repair & Fix to me when I had some issues with my laptop. I contacted them and they were very understanding, helpful and prompt with dealing with my requirements. Your consultants were happy to talk me through everything during the first consultation. Thank you!</p>
            </div>
            <div class="item">
                <img src="https://livedemo00.template-help.com/wt_prod-10943/images/testimonials-3-120x120.jpg" />
                <div class="name">Walter Knight</div>
                <small class="desig">Photographer</small>
                <div class="share"><i class="fa fa-facebook"></i><i class="fa fa-twitter"></i><i class="fa fa-instagram"></i></div>
                <p>I have worked with Repair & Fix for several years. They re-built a computer for me and later upgraded it and now it feels just like a new one. The value, quality, and follow-up are outstanding. I highly recommend this company, their professionalism and customer care are unmatched.</p>
            </div>
        </div>
           
    </div>

    

          <div className="footerproductdetail">
            <Footer/>
          </div>

        </>
    )
}