import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Colaborate () {
    return(
        <>


          <div>
          <NavBar />
        </div>

        <nav className="fstsec">
             
             <div>
             <h1 className="fstcareer">Colaborate</h1>
             </div>

             <div className="colaboratehome">
                <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Colaborate</b></h3> 
             </div>
             
        </nav>

        {/* <div className="sectioncareer">
            <h3 >
            <b></b><span class="careeroprtunity " >Colaborate With Us</span><b></b></h3>
                        <p className="Being">
                        We at Gyros are collaborators and cooperators on a massive scale.
                         We have roped in village communities to work with us and share their traditional knowledge.
                          The finest example is the production of jaggery which is heavily borrowed from the ancient
                           knowledge <br></br>of the village communities. The product is of top-notch quality, but Gyros doesn’t stop at that. We collaborate keeping in mind the welfare of the villages as well.
                            Our slogan is to rebrand health, from one hamlet to another.
                        </p>
            </div> */}

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

   <div className="communityinitiative1">
   <h4 className="communityinitiative"><b>COMMUNITY INITIATIVES</b></h4>

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
   </div>

        <div className="footerproductdetail1">
            <Footer />
            </div>

        </>
    )
}