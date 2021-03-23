import React from 'react';
import useViewport from '../../hooks/Viewport';
import SignIn from '../../components/SignIn';
import '../../assets/styles/main.scss'
import Footer from '../../components/Footer';
import SwiperMcSwipeWrapper from '../../components/SwiperMcSwipeWrapper'

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