import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import '../../assets/styles/main.scss';

const LoadingScreen = ({ theme, children }) => (
	<div className="LoadingScreen">
		<Loading theme={theme} />
		{ children }
	</div>
);

LoadingScreen.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.string
};

LoadingScreen.defaultProps = {
	theme: 'light'
};

export default LoadingScreen;