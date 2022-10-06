import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function ExixtingReallife() {
    return (
        <>

               <div>
                <NavBar />
            </div>

            <nav className="fstsec">

                <div>
                    <h1 className="fstcareer">Exixting Real Life Stories</h1>
                </div>

                <div className="Existingreallifee">
                    <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Real Life Stories</b></h3>
                </div>
                </nav>

                <div class="row">
                <div class="col-sm lorem ">
                    <img src="https://img.freepik.com/premium-photo/ghee-clarified-butter-jar-wooden-spoon-wooden-table_123827-12033.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={450} height={550} class="vdoslide " />
                </div>
                <div class="col-sm superhealty1">
                    <h1 class="offer heading">
                        Real Life Stories
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
            </div>
            
            <div className="sectioncareer">
            <h3>
            <b></b><span class="careeroprtunity " >EXISTING LIFE STORIES</span><b></b></h3>

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

            <div class="col-sm lorem">
                    <img src="https://img.freepik.com/free-photo/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view_127032-1963.jpg?size=626&ext=jpg&ga=GA1.2.608831910.1663411158" width="100%" height={500} class="" />
                </div>


                <div className="footerproductdetail">
                    <Footer />
                </div>

        </>
    )
}