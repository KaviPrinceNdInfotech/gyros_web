import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Career () {
    return(
      <>
                <div >
          <NavBar />
        </div>

        <nav className="fstsec">
             
             <div>
             <h1 className="fstcareer">Career</h1>
             </div>

             <div className="careerscndhead">
                <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Career</b></h3> 
             </div>
             
        </nav>

            <div className="sectioncareer">
            <h3 >
            <b></b><span class="careeroprtunity " >CAREER OPPORTUNITIES AT GYROS FARM</span><b></b></h3>
                        <p className="Being">
                       Being one of the fastest-growing suppliers of dietary supplement ingredients, 
                       we always search for passionate <br></br> and committed people to join our team. Are you an
                        energetic professional 
                        ready to showcase your talent in <br></br>helping us achieve our business goals? Join us!
                        </p>
            </div>

            <div className="sectioncareer">
            <h3>
            <b></b><span class="careeroprtunity " >REASONS TO WORK WITH US</span><b></b></h3>

            <h4 className="RESPONSIBILITY"><b>EXTRACURRICULAR ACTIVITIES</b></h4>
                        <p className="strongly ">
                        We strongly believe in the saying, “Unity in Diversity”. Therefore, we provide opportunities to candidates from varied nationalities,
                         ethnicity, age, gender, <br></br>and education. We recognize
                          the challenges of promoting diversity such as flexibility, adaptability, understanding values and beliefs.<br></br>

                          <br></br>Therefore, provide a platform where opportunities can be created to listen to different points of view, broaden recruitment scope, 
                          and contemplate innovative <br></br> ways to attract the best talents.
                        </p>

                        
            <h4 className="RESPONSIBILITY1"><b>NURTURING TALENTS</b></h4>
                        <p className="strongly">
                        Our team members help each other, especially to those who are new joiners in order to nurture talents. Under the guidance of our eminent leaders, 
                        we <br></br>unite with the same goal of making this world a healthy place.
                        </p>

                        
            <h4 className="RESPONSIBILITY3"><b>EMINENT WORK ETHICS</b></h4>
                        <p className="strongly">
                        We maintain a friendly yet professional work environment with eminent work 
                        ethics by treating every employee with respect to harbour high productivity.
                        </p>

                        
            <h4 className="RESPONSIBILITY2"><b>COMMUNITY INITIATIVES</b></h4>
                        <p className="strongly">
                        We help each other in our highs and lows and proactively involve in community initiatives
                         to extend help. We also support an employee or a family member <br></br> under
                         circumstances of serious illness by providing emotional as well as financial aid.<br></br>

                        <br></br> We believe in gender equality thus, actively encourage women candidates to join our organization while maintaining a healthy women-men equality index.
                        </p>
            </div>

            <div className="footerproductdetail">
            <Footer />
            </div>
          
            </>

        
    )
}