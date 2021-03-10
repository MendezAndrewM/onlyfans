import React from 'react';
import logoLight from './../../assets/img/logo/logoLight.png';
import logoDark from './../../assets/img/logo/logoDark.png';
import BtnFancy from '../../components/BtnFancy';

const SignIn = ({ theme }) => {
    const handleSubmit = () => alert('Nah');
    return (
        <div>
        <div className="LogoDiv">
            <img 
            src={theme === 'dark' ? logoDark : logoLight}
            className="formLogo"/>
        </div>
        <div className="form_col">
            <span style={{margin: '12px auto'}}>Sign up today for the fans!</span>

            <BtnFancy label="Sign Up / Login with Twitter" />
            <div className="orBox">
                <hr className="line" />
                <span className="through">or</span>
                <hr className="line" />
            </div>

            <form 
                onSubmit={handleSubmit}
                className="signUpForm"
            >
                <label className="signUpLabel">
                    <input 
                        className="signUpInput"
                        placeholder="E-mail"
                        type="text"/>
                </label>
                <label className="signUpLabel">
                    <input 
                        className="signUpInput"
                        placeholder="Password"
                        type="password" />
                </label>

                <button className="LoginBtn">
                    Login
                </button>
            </form>

            <h3>Don't have an account yet?</h3>
            <a className="saL" href="#">Sign up for OnlyFans.fan</a>
            <a className="saL">Forgot password?</a>
        </div>
        </div>
    )
}

export default SignIn;