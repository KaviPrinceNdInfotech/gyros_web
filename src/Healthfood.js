import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Healthfood() {
    return (
        <>

            <div>
                <NavBar />
            </div> 
  
            <nav className="fstsec">

                <div>
                    <h1 className="fstcareer">Health and Food</h1>
                </div>

                <div className="healthhome">
                    <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Health and Food</b></h3>
                </div>

            </nav>

            <div class="row">
                <div class="col-sm lorem ">
                    <img src="https://img.freepik.com/premium-photo/ghee-clarified-butter-jar-wooden-spoon-wooden-table_123827-12033.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width={450} height={550} class="vdoslide " />
                </div>
                <div class="col-sm superhealty1">
                    <h1 class="offer heading">
                        What Foods Should be?
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


            <div className="superhealty">

                <h4 className="RESPONSIBILITY6"><b>Super Healthy Foods</b></h4>
                <p className="strongly1">
                    It’s easy to wonder which foods are healthiest. <br></br>

                        A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables,<br></br> quality protein sources, and other whole foods, you’ll have meals that are colorful, versatile, <br></br> and good for you.<br></br>

                        Here are 50 incredibly healthy foods. Most of them are surprisingly delicious.
                </p>

                <div class="col-sm lorem">
                    <img src="https://img.freepik.com/free-photo/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view_127032-1963.jpg?size=626&ext=jpg&ga=GA1.2.608831910.1663411158" width="100%" height={500} class="" />
                </div>
            </div>

            <h4 className="RESPONSIBILITY5"><b>Some Other species</b></h4>
            <div className="row">

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src="https://jeevaorganic.com/wp-content/uploads/2022/01/seeds-300x360.jpg" />
                        </div>
                        <div className="card__copy">
                            <h1>SEEDS</h1>
                            <h2>7 Products</h2>
                            <p>

                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src="https://jeevaorganic.com/wp-content/uploads/2022/01/berry-300x360.jpg" />
                        </div>
                        <div className="card__copy">
                            <h1>BERRIES</h1>
                            <h2>2 Products</h2>
                            <p>

                            </p>
                        </div>
                    </div>



                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src="https://jeevaorganic.com/wp-content/uploads/2022/01/cat-image-300x360.jpg" />
                        </div>
                        <div className="card__copy">
                            <h1>NUTS</h1>
                            <h2>4 Products</h2>
                            <p>


                            </p>
                        </div>
                    </div>

                </div>

            </div>

            


            <div className="footerproductdetail1">
                <Footer />
            </div>

        </>
    )
}