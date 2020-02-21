import React from "react";

import './menu-item.scss';


const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`} style={{backgroundImage: `url(${imageUrl})` }}>
        <div className='bg-image' style={{backgroundImage: `url(${imageUrl})` }}></div>
        <div className='content'>
            <div className='title'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </div>
);

export default MenuItem;