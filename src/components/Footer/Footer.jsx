import React from 'react';

const Divider = () => <span className="footItem"> | </span>;
const Footer = ({ theme }) => {
    return (
    <div className="Footer">
        <div className="footWrapper">
            <span className="footItem">©2020 Mendez-Solutions</span>
            <Divider />
            <span className="footItem">Blog</span>
            <Divider />
            <span className="footItem">Twitter</span>
        </div>
        <div className="footWrapper">
            <span className="footItem">FAQs</span>
            <Divider />
            <span className="footItem">Terms</span>
            <Divider />
            <span className="footItem">Privacy</span>
            <Divider />
            <span className="footItem">Contact</span>
            <Divider />
            <span className="footItem">How it works</span>
            <Divider />
            <span className="footItem">CC0</span>
        </div>
        <div className="footWrapper">
            <span className="footItem">🌐 English ⌄</span>
        </div>
    </div>
    )
}

export default Footer;