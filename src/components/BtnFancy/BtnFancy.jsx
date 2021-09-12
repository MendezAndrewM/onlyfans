import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BtnFancy = ({
	onClick,
	activeBackground,
	backgroundColor,
	borderRadius,
	color,
	fontSize,
	fullWidth,
	hoverBackground,
	hoverColor,
	padding,
	type,
	children,
}) => {
	const CustomBtn = withStyles(() => ({
		root: {
			color: color,
			backgroundColor: backgroundColor,
			fontSize: fontSize,
			padding: padding.join(' '),
			lineHeight: 1.5,
			borderRadius: borderRadius,
			'&:hover': {
				backgroundColor: hoverBackground,
				color: hoverColor
			},
			'&:active': {
				backgroundColor: activeBackground,
				color: hoverColor
			},
			'&:focus': {
				backgroundColor: activeBackground,
				color: hoverColor
			},
		}
	}))(Button);

	return (
		<CustomBtn
			fullWidth={fullWidth}
			variant="contained"
			color="primary"
			onClick={onClick}
			type={type}
		>
			{children}
			<div sdf />
		</CustomBtn>
	);
};

BtnFancy.propTypes = {
	activeBackground: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderRadius: PropTypes.string,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	fontSize: 14,
	fullWidth: true,
	hoverBackground: PropTypes.string,
	hoverColor: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	padding: ['12px', '22px', '12px', '22px'],
	type: PropTypes.string,
};

BtnFancy.defaultProps = {
	backgroundColor: 'rgb(38,111,144)',
	hoverBackground: 'rgb(57,161,242)',
	activeBackground: 'rgb(89, 173, 236)',
	borderRadius: '25px',
	color: 'white',
	hoverColor: 'white',
	fontSize: 14,
	fullWidth: true,
	padding: ['12px', '22px', '12px', '22px'],
	type: 'button',
};

export default BtnFancy;
