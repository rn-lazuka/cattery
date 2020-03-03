import React from 'react';
import s from './Advantage.module.css'

function Advantage(props) {
    return (
        <div className={s.item}>
            <div className={s.icon} style={{backgroundImage: `url(${props.icon})`}}></div>
            <div className={s.title}><b>{props.title}</b></div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

export default Advantage;