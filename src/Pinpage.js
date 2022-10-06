import React from "react";
import logo from './logo.png';
import loginpic from './images/loginpic.jpg';
import { Link } from "react-router-dom";
export default function Pinpage(){
    return(
        <div class="container1">
          <div class="content">
          <div class="nav-logo">
            <img class="forgetpasslogo" src={logo} width="150" height="180"  />
            
          </div>
            <div class="socialMedia">
                        <ul>
                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.google.com/"><i class="fab fa-google-plus-square"></i></a></li>
                            <li><a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a></li>
                        </ul>
                    </div>

                    <form>
                     <div class="text-center ">
                     <div class="inputbx">
                <h1>Pin Re-set</h1>
                <input type="number" class="loginfont" placeholder="Enter Your Pin" required />
              </div>
              <Link to="/Confirmpass">
                 <button type="submit" class=" btn btn-block send-button7 loginfont">Reset</button>
                 </Link>
               </div>
               </form>

               </div>
        </div>
      
      
    );
}