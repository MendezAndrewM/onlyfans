import React from 'react';

const BtnFancy = ({ 
    theme,
    label,
    link,
    svg,
    type
}) => (
    <a className="BtnFancy">
        <span className="FancyLabel">{label}</span>
    </a>
)

export default BtnFancy;