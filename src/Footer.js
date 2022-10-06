import React from "react";
import logo from './logo.png';
import mail from './images/mail.png';
import googlemap from './images/googlemap.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
export default function Footer() {
  return (
    <div class="containerf">
      <div class="row">
        <div class="col-sm">
          <img src={logo} width="150" height="180" className='flogo' />
          <h6 class="connect">Connect us</h6>
          <div className="row">
            <div className="col-md-4">
            <ul class="contact footer1st">
            <li>
                 <a class="fb" href="https://www.facebook.com/">
              <i class="fab fa-facebook "></i>
              </a>
              
            </li>
            <li>
                 <a class="fb" href="https://www.youtube.com/">
                 {/* <i class="fab fa-youtube fa-2x"></i> */}

                 <img src={youtube} width="25" height="25"  />
              </a>
              
            </li>
            <li>
            <a class="fb" href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
              </a>
              
            </li>
            <li>
            <a class="fb" href="https://www.instagram.com/">
              {/* <i class="fab fa-instagram fa-2x"></i> */} 
              <img src={instagram} width="22" height="22"  />
          </a>
              
            </li>
          </ul>
            </div>
          </div>
          <div>
            <h6 class="subscribe">Subscribe For Offer</h6>
            <form action="/action_page.php">
              <label for="email"></label>
              <input type="email" id="email" name="email" placeholder="Email@example.com" />
              <span>
                <button type="submit" class="btn footer-email-submit"  name="subscribe" id="subscribe"><svg width="7" class="fsvg" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.152344 9.13333L3.97318 5.3125L0.152344 1.49167L1.33151 0.3125L6.33151 5.3125L1.33151 10.3125L0.152344 9.13333Z" fill="white" /></svg></button>
              </span>
            </form>
          </div>
        </div>
        <div class="col-sm  ">
          <div class="">
            <h4 class=" info">Information</h4>
            <ul class="contact infoalign">
              <li className="list-item1 terms ">
              <h6 class="info3">Terms and Conditions</h6>
              </li>
              <li className="list-item1 privacy">
              <h6 class="info3" >Privacy Policy</h6>
              </li>
              <li className="list-item1 shiping">
              <h6 class="info3">Shipping Policy</h6>
              </li>
              <li className="list-item1 refund">
              <h6 class="info3">Refund Policy</h6>
              </li>
              <li className="list-item1 Cancellation">
              <h6 class="info3">Cancellation Policy</h6>
              </li>
            </ul>
          </div>
        </div>


        <div class="col-md-3 contactus">
          <h4 class="download info">Contact us</h4>
          <ul class="contact">
          <div className="row contactalign">
            <li className="list-item">
              
            <a href="https://www.google.com/maps/place/N+D+Techland+Private+Limited/@28.5826421,77.3132616,18z/data=!3m1!4b1!4m5!3m4!1s0x390ce5d8a4ef20d9:0xf5ba241cb4a775a1!8m2!3d28.5826397!4d77.3143559">
              {/* <i class="fas fa-map-marker-alt "></i> */}
              <img src={googlemap} width="25" height="25"  />
              </a>
              <span className="text info2">C-54 Noida Sec-2</span>
              
            </li>
            </div>
            
            {/* <div class="row">
            <div class="col-sm map">
              <a href="https://www.google.com/maps/place/N+D+Techland+Private+Limited/@28.5826421,77.3132616,18z/data=!3m1!4b1!4m5!3m4!1s0x390ce5d8a4ef20d9:0xf5ba241cb4a775a1!8m2!3d28.5826397!4d77.3143559">
              <i class="fas fa-map-marker-alt "></i>
              </a>
              </div>
              <div class="col-sm Noida">
                <h6 >C-54 Noida Sec-2</h6>
            </div>
            </div> */}
<div className="row contactalign">
            <li className="list-item">
              
            <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              {/* <i class="far fa-envelope "></i> */}
              <img src={mail} width="18" height="20"  />
              </a>
              <span className="text info1">info@GyroS.com</span>
              
            </li>
            </div>
            {/* <div class="row">
            <div class="col-sm mail">
              <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              <i class="far fa-envelope "></i>
              </a>
              </div>
              <div class="col-sm">
              <h6 class="info">info@GyroS.com</h6>
            </div>
            </div> */}

            <div className="row contactalign">
            <li className="list-item">
              
            <a href="Tel: 123-456-7890">
              <i class="fas fa-mobile-alt " ></i>
              </a>
              <span className="text info1">+91- 56891478</span>
              
            </li>
            </div>
            
            {/* <div class="row">
            <div class="col-sm mobi">
              <a href="Tel: 123-456-7890">
              <i class="fas fa-mobile-alt "></i>
              </a>
            </div>
            <div class="col-sm mobi">
              <h6 class="mobialn">+91- 56891478</h6>
            </div>
            </div> */}

<div className="row contactalign">
            <li className="list-item">
              
            <i class="fab fa-whatsapp"></i>
              <span className="text info1">+91- 78453621</span>
              
            </li>
            </div>

            {/* <div class="row ">
            <div class="col-sm whatsapp ">
            <i class="fab fa-whatsapp"></i>
            </div>
            <div class="col-sm whatsappaln">
              <h6>9178453621</h6>
            </div>
            </div> */}
          </ul>
        </div>


        <div class="col-sm">
          <ul class="contact">
            <h4 class="download info">Download App</h4>
           
            <li class=" playstore">
              <a target="_blank" href="https://play.google.com/store/apps?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-ap-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700064490253541_creativeid_480915691333_device_c&gclid=CjwKCAjw3K2XBhAzEiwAmmgrAtl18ECrNN2tBN6DLn4-FaQ2iP8iCzOKIKRlx0bhzSEtllIYhBuzhxoCWLYQAvD_BwE&gclsrc=aw.ds">
              <img src="https://ubidindia.com/wp-content/uploads/2022/02/2560px-Google_Play_Store_badge_EN.svg_.png" width="108" height="54" />
              </a>
            </li>

            <li class=" appstore ">
              <a href="https://www.apple.com/in/app-store/" target="_blank"> 
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" width="111" height="56" />
              </a>
            </li> 
          </ul>
        </div>
      </div>
      <div class="powered">
        <b>@</b> 2022 <b><i>GyroS</i></b> Powered By <b>N D INFOTECH</b>
      </div>
    </div>
  )
}