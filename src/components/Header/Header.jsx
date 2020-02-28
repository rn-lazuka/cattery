import React from 'react';
import s from './Header.module.css'
import Navbar from "../Navbar/Navbar";
import logo from '../../assets/images/logo.png'

const Header = ()=> {
    return(
        <div className={s.header}>
            <a href={'#'}><img className={s.logo} src={logo} alt={"#"}/></a>
            <div className={s.container}>
                <Navbar/>
            </div>
        </div>
    )
};


export default Header;