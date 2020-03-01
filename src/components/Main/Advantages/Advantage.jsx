import React from 'react';
import s from './Advantage.module.css'

function Advantage(props) {
    return (
        <div className={s.item}>
            <div style={{backgroundImage: `url $(props.icon)`}}></div>
            <div className={s.title}>{props.title}</div>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

export default Advantage;