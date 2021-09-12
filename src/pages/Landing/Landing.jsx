import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Landing.scss';
import SignIn from '../../components/SignIn';
import Footer from '../../components/Footer';
import SwiperMcSwipeWrapper from '../../components/SwiperMcSwipeWrapper';
import useViewport from '../../hooks/Viewport';

const Landing = () => {

	const { width } = useViewport();

	return (
		<Container maxWidth="lg">
			<Grid
				container
				wrap="nowrap"
				className="LandingContainer"
				justify="space-evenly"
			>
				{
					width >= 960 && (
						<Grid
							item
							container
							alignItems="center"
							justify="center"
							lg={6}
						>
							<SwiperMcSwipeWrapper />
						</Grid>
					)
				}
				<SignIn />
			</Grid>
			<Footer />
		</Container>
	);
};

export default Landing;
