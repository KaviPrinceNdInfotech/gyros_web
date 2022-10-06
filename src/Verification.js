import React from "react";
import logo from './logo.png';
import loginpic from './images/loginpic.jpg';
import { Link } from "react-router-dom";
export default function Verification(){
    return(
        <div >
            <img src={logo} width="250" height="200" class="otplogo" />    
  <body class="verificationbody">
    <div class="d-flex justify-content-center align-items-center continer">
      <div class="card py-5 px-3">
        <h5 class="m-0">Mobile phone verification</h5>
        <span class="mobile-text"
          ><b>Enter the code we just sent on your phone</b>
          <b class="text-color">+91 09899619282</b>
        </span>
        <div class="d-flex flex-row mt-5">
          <input type="text" class="form-control" autofocus="" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
        </div>
        <div class="text-center mt-5">
          <span class="d-block mobile-text" id="countdown"></span>
          <span class="d-block mobile-text" id="resend"></span>
        </div>
      </div>
    </div>
    <div class="send-button8">
      <Link to="/">
    <button type="submit" class=" btn btn-block loginfont ">Verify</button>
    </Link>
    </div>
    <p class="recieve loginfont">Didn't receive any code</p>
    <Link to="/Mobilelogin">
    <h6 class="resend loginfont">Resend New Code</h6>
    </Link>
    <script src="Main.js"></script>
    
  </body> 

               </div>
    );
}