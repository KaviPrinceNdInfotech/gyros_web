import React from "react";
import NavBar from './NavBar';
import ImgSlider from './ImageSlider';
import VideoSlider from './videoSlider';
import Banner from './Banner';
import Video from './Video';
import Bestsellerweek from './Bestsellerweek';
import Toppicks from './Toppicks';
import Believe from './Believe';
import Footer from './Footer';
import MyVerticallyCenteredModal from "./Popup";
// import Popup from "./Popup";



export default function Home(){
    return(
        <>
        <MyVerticallyCenteredModal />
         <NavBar />
      <div className='mt-3'>
      <ImgSlider />
      </div>
      <div className='mt-3'>
      <VideoSlider />
      </div>
      <div className='mt-3'>
      <Bestsellerweek />
      </div>
      <div className='mt-3'>
      <Banner />
      </div>
      <div className='mt-3'>
      <Toppicks />
      </div>
      <div className='mt-3'>
      <Believe />
      </div>
      <div className='mt-3'>
      <Video />
      </div>
      <div className='mt-5'>
      <Footer />
      </div>
        </>
    )
}