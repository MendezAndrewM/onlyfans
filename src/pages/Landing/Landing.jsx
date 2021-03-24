import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Landing.scss';
import SignIn from '../../components/SignIn';
import Footer from '../../components/Footer';
import SwiperMcSwipeWrapper from '../../components/SwiperMcSwipeWrapper'
import useViewport from '../../hooks/Viewport';

export default function Landing() {

  const { width } = useViewport();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        className="LandingContainer"
        justify="space-around"
      >
        {
          width >= 929 && (
            <div>
              <SwiperMcSwipeWrapper />
            </div>
          )
        }
          <SignIn />
        </Grid>
      <Footer />
    </Container>
  )
  
}