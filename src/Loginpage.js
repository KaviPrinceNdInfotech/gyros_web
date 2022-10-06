import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import createaccount from "./Createaccount";
import Forgetpass from "./Forgetpass";
export default function Loginpage(){
    return(
      <div class="container1"  >
         
          <div class="content">
          <div class="nav-logo">
            <img className='loginlogol' src={logo} width="150" height="180"  />
          </div>
            <div class="socialMedia">
                        <ul>
                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.google.com/"><i class="fab fa-google-plus-square"></i></a></li>
                            <li><a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a></li>
                        </ul>
                    </div>
            {/* <form action="">
              <div class="inputbx">
                <span></span>
                <input type="text" placeholder="Username" required />
              </div>
              <div class="inputbx">
                <span></span>
                <input type="password" placeholder="Password" required />
              </div>
              <div class="submitbox">
                <input type="submit" value="Login" />
              </div>
              </form> */}

             <form>
                     <div class="text-center ">
                     <Link to="/Mobilelogin">
                 <button type="submit" class=" btn btn-block send-button4 loginfont1 loginfont">Login With Mobile</button>
                 </Link>

                 <Link to="/Emaillogin">
                 <button type="submit" class=" btn btn-block send-button5 loginfont1 loginfont">Login With Email</button>
                 </Link>
                 <Link to="/createaccount">
                 <button type="submit" class=" btn btn-block send-button6 loginfont1 loginfont">SignUp</button>
                 </Link>

             
               </div>
               </form>
      


              {/* <div class="create">
                <Link to="createaccount">
              <p class="createacc">Create Account</p>
              </Link>
              </div>

              <div>
                <Link to="forgetpass">
            <p>Forget Password</p>
            </Link>
              </div> */}
            
          </div>
        </div>
      
      
    );
}