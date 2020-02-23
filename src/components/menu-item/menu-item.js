import React from "react";
import {withRouter} from 'react-router-dom'; //importing react router

import './menu-item.scss';


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} style={{backgroundImage: `url(${imageUrl})` }} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='bg-image' style={{backgroundImage: `url(${imageUrl})` }}></div>
        <div className='content'>
            <div className='title'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </div>
);

export default withRouter(MenuItem);