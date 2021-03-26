import React from 'react';
import { Grid } from '@material-ui/core';
import "./SignIn.scss";
import logoLight from './../../assets/img/logo/logoLight.png';
import logoDark from './../../assets/img/logo/logoDark.png';
import BtnFancy from '../../components/BtnFancy';
import SignInForm from './SignInForm';

const SignIn = ({ theme }) => {
    return (
        <Grid
            container
            item
            className="SignIn"
            wrap="nowrap"
            direction="column"
            alignItems="center"
            justify="flex-start"
            spacing={2}
            xs={12}
            lg={6}
        >
            <img
                src={theme === 'dark' ? logoDark : logoLight}
                id="title-logo"
            />
            <Grid
                item
                id="formContainer"
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
                spacing={3.3}
                xs={12}
                sm={8}
            >
                <h6 id="signUpBlurb">Sign up today to enjoy some fans!</h6>
                <BtnFancy>
                   <span id="TwitterBtn">
                       Sign in with Twitter
                    </span>
                </BtnFancy>
                <BtnFancy>
                   <span id="GoogleBtn">
                       Sign in with Google
                    </span>
                </BtnFancy>
                <div className="orBox">
                    <hr className="line" />
                    <span className="through">or</span>
                    <hr className="line" />
                </div>

                <SignInForm />

                <Grid
                    item
                    id="signUpLink"
                    container
                    direction="column"
                    alignItems="center"
                    justify="space-evenly"
                >
                    <h6>Don't have an account yet?</h6>
                    <a href="#"><h6>Sign up for OnlyFans.fan</h6></a>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignIn;