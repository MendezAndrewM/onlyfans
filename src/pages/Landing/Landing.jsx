import React from 'react';
import useViewport from '../../hooks/Viewport';
import SignIn from '../../components/SignIn';
import '../../assets/styles/main.scss'
import Footer from '../../components/Footer';

function SwiperMcSwipeWrapper() {
  return <img src="https://via.placeholder.com/440x720.png?text=SwiperMcSwipeFace" />
}

export default function Landing() {

  const { width, height } = useViewport();

  return (
    <div className="Container">
      <div className="LandingContainer">
        {
          width >= 902 && (
            <div className="phone_col">
              <SwiperMcSwipeWrapper />
            </div>
          )
        }
        <SignIn />
      </div>
      <Footer />
    </div>
  )
  
}