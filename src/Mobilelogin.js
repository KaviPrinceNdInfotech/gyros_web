import React from "react";
import logo from './logo.png';
import loginpic from './images/loginpic.jpg';
import { Link } from "react-router-dom";
export default function Mobilelogin(){
    return(
        
          <div >
          <div>
            <img src={logo} width="150" height="180"  /> 
          </div>

            <div class="socialMedia">
                        <ul>
                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.google.com/"><i class="fab fa-google-plus-square"></i></a></li>
                            <li><a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a></li>
                        </ul>
                    </div>

                    <h5 className="mobilogin6">Login With Mobile</h5>
<form action="">
  <section >
    <div class="input-container containermoblogn">
      <input type="Number" placeholder="Enter your Phone"></input>
    </div>
    
  </section>

  <Link to= "/">
  <div class="loginbutton">
   <button class="btn btn-primary btn-block loginfont6" type="submit ">Login</button>
  </div>
  </Link>
</form>

               </div>
        
      
      
    );
}