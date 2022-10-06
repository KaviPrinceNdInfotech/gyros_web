
import React ,{Component, useState} from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png';
// import ApiService from './ApiService';
import CommonService from './signupService';
// import CommonService from './ApiService';
import NavBar from "./NavBar";
import home from './home';
export default function Createaccount(){

     const [name, setName] =useState("");
     const [email_id, setEmail_Id] =useState("");
     const [mobile_no, setMobile_No] =useState("");
     const [password, setPassword] =useState("");
     const [confirmpassword, setConfirmPassword] =useState("");


     function SignUp() 
     {
      console.warn({name,email_id,mobile_no,password,confirmpassword});
      let data={name,email_id,mobile_no,password,confirmpassword}
      fetch("https://api.gyros.farm/api/AdminApi/Registration",{
        method:'POST',
        headers:{ 
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }).then((result)=>{
          console.warn("result",result);
      })
     }

  // SignUp(e)
  //   {
  //       e.preventDefault()
  //       console.log("hello")
  //       let formdata = new FormData()
  //       formdata.append("Name",this.state.Name)
  //       formdata.append("Email_Id",this.state.Email_Id)
  //       formdata.append("Mobile_No",this.state.Mobile_No)
  //       formdata.append("Password",this.state.Password)
  //       formdata.append("ConfirmPassword",this.state.ConfirmPassword)
  //       //  formdata.append("Id","23")
  //       // let item = {(this.state.Name,this.state.Email_Id,this.state.Mobile_No,this.state.Password,this.state.ConfirmPassword)}
  //       // let formdata = new FormData()
  //       // formdata.append("Name",Name)
  //       // formdata.append("Email",Email)
  //       // formdata.append("Phone",Phone)
  //       // formdata.append("Password",Password
  //       // formdata.append("ConfirmPassword",ConfirmPassword)
  //       // console.warn(item)
  //       let obj = {
  //         Name:this.state.Name,
  //         Email_Id:this.state.Email_Id,
  //         Mobile_No:this.state.Mobile_No,
  //         Password:this.state.Password,
  //         ConfirmPassword:this.state.ConfirmPassword
  //       }
  //     CommonService.getData(formdata).then((res)=>{
  //       console.log(res)
  //     })
  //       // let result = await fetch("https://api.gyros.farm/api/AdminApi/Registration", {

  //       //     method : 'POST',
  //       //     mode:"cors",
  //       //     body:JSON.stringify(item),
  //       //     // multipart: true,
  //       //      headers:{ 
  //       //         //  "Content-Type" : 'application/json',
  //       //          "Accept" : 'application/json',
  //       //         //  "Access-Control-Allow-Origin":"*"
  //       //      }
  //       // })
  //       // result = await result.json()
  //       // console.warn("result", result)
       
  //   }
  //   render(){

    return (
        
            
        //         <div > 
        //     
                   
        //             <div >
        //                 <div class="row">
        //                     <div class="col-md-4 mx-auto">
                                
        //                             <form action="" method="POST" name="login">
        //                                 <div class="form-group">
        //                                     <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} class="form-control  loginfont" id="name" placeholder="Enter Your Name" />
        //                                 </div>
        //                                 <div class="form-group">
        //                                     <input type="email" value={Email_Id}  onChange={(e)=>setEmail_Id(e.target.value)} class="form-control my-input loginfont" id="email" placeholder="Enter Your Email" />
        //                                 </div>
        //                                 <div class="form-group">
        //                                     <input type="number" value={Mobile_No}  onChange={(e)=>setMobile_No(e.target.value)} min="0" name="phone" id="phone" class="form-control my-input loginfont" placeholder="Enter Your Phone" />
        //                                 </div>
        //                                 <div class="form-group">
        //                                     <input type="password" value={Password}  onChange={(e)=>setPassword(e.target.value)} min="0" name="password" id="password" class="form-control my-input loginfont" placeholder="Enter Your Password" />
        //                                 </div>
        //                                 <div class="form-group">
        //                                     <input type="password" value={ConfirmPassword}  onChange={(e)=>setConfirmPassword(e.target.value)} min="0" name="confirmpassword" id="confirmpassword" class="form-control my-input loginfont" placeholder="Confirm Password" />
        //                                 </div>
        //                                 
        //                                 <div class="col-md-12 ">
        //                                     <div class="login-or">
        //                                         <hr class="hr-or" />
        //                                         <span class="span-or">or</span>
        //                                     </div>
        //                                 </div>
        //                             </form>
                                

                                
        //                     </div>
        //                     <div class="returncolor">
        //             <Link to="/"><p ><b>already have an Account ? </b> Login</p></Link>
        //                 </div>
        //                 </div>
        //             </div>
                    
        //         </div>

        <>
  
         <form onSubmit="return myfun()" >
           <Link to="/">
         <div>
             <img src={logo} width="200" height="200" className='lmgcreateacc' />
           </div>
           </Link>

         <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
    <div class="col-sm-10">
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} 
      class="form-control form-control-lg" name='name' placeholder="Enter Your Name"  required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
    <div class="col-sm-10">
      <input type="email" value={email_id} onChange={(e)=>{setEmail_Id(e.target.value)}}  
      class="form-control form-control-lg"  name="email_id" placeholder="Enter Your Email" required />
    </div>
  </div>

  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
    <div class="col-sm-10">
      <input type="Number" 
      
       value={mobile_no} onChange={(e)=>{setMobile_No(e.target.value)}} id="mobilenumber" 
      class="form-control form-control-lg" name='mobile_no' placeholder="Enter Your Phone"  required/>
      <span id='message'></span>
    </div>
  </div>

  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
    <div class="col-sm-10">
      <input type="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} 
       class="form-control form-control-lg" name="password" placeholder="Enter Your Password"  required/>
    </div>
  </div> 

  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
    <div class="col-sm-10">
      <input type="Password" value={confirmpassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}
       class="form-control form-control-lg" name="confirmpassword" placeholder="Re-Enter Password" required />
    </div>
    <div>
      {name !== "" && email_id !== "" && mobile_no !== "" && password !== "" && confirmpassword !=="" ?
    <Link  to="/Emaillogin">
      <button type="submit"  onClick={SignUp} class=" btn btm1 btn-block loginfont send-button">SignUp</button>
      </Link>
      :<button type="submit" onclick="phonenumber(document.form1.text1)"  onClick={SignUp} class=" btn btm1 btn-block loginfont send-button">SignUp</button>}
        </div>
  </div>
         </form>

        </>
            
    
    );
    }