import React from 'react';
import logoLight from './../../assets/img/logo/logoLight.png';
import logoDark from './../../assets/img/logo/logoDark.png';

const UnderConstruction = ({ theme }) =>  (
    <img 
            className='throb' 
            src={theme === 'dark' ? logoDark : logoLight} 
            alt="logo"
            style={{
                marginTop: '38vh',
                width: '70vw',
                height: 'auto'
        }}
    />
);

export default UnderConstruction;

// const bg = {
//   large: [
//     'https://live.staticflickr.com/4509/36649105643_51b3da35c5_k.jpg',
//     'https://live.staticflickr.com/1960/31873844948_196f54450d_k.jpg',
//     'https://live.staticflickr.com/8599/27575019843_7212df6aa4_5k.jpg',
//     'https://live.staticflickr.com/8748/16357907284_03470457f4_4k.jpg',
//   ],
//   medium: [
//     'https://live.staticflickr.com/4362/37217435685_a0cf602c4a_k.jpg',
//     'https://live.staticflickr.com/5028/5563992757_565c672e3b_k.jpg',
//     'https://live.staticflickr.com/2415/2041950312_62916f6bd9_h.jpg',
//     'https://live.staticflickr.com/6196/6139354281_3557f02ddd_h.jpg'
//   ],
//   mobile: [
//     'https://live.staticflickr.com/4406/37289196062_dc2fe8f4d9_k.jpg',
//     'https://live.staticflickr.com/7037/6919629661_2da45bb884_3k.jpg',
//     'https://live.staticflickr.com/7037/6919625059_98e1e7d7b6_3k.jpg',
//     'https://live.staticflickr.com/8320/8022309149_2cde3349e9_h.jpg'
//   ]
// };