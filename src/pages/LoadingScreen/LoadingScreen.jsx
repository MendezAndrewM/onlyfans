import React from 'react';
import Loading from '../../components/Loading';
import '../../assets/styles/main.scss'

const LoadingScreen = ({ theme, children }) => (  
    <div className="LoadingScreen">
        <Loading theme={theme} />
        { children }
    </div>
);

export default LoadingScreen;