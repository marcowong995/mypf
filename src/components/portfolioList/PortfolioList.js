import React from 'react'
import './portfolioList.scss';

export default function PortfolioList({id,title,active, setSelected}) {
    return (
        <li className={active ? 'portfolioList active' : 'portfoilioList'}  onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
