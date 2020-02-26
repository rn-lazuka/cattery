import React from 'react';
import s from './Header.module.css'
import Navbar from "../Navbar/Navbar";

const Header = ()=> {
    return(
        <div className={s.header}>
            <div className={s.container}>
                <Navbar/>
            </div>
        </div>
    )
};


export default Header;