import React from 'react';
import { Grid } from '@material-ui/core';
import "./Footer.scss";

const Footer = ({ theme }) => (
    <Grid
        container
        className="Footer"
        justify="space-around"
        alignItems="center"
    >
        <span item xs={3}>©2021 Mendez-Solutions</span>
        <span item xs={3}>FAQs</span>
        <span item xs={3}>Contact</span>
        <span item xs={3}>How it works</span>
    </Grid>
);


export default Footer;
