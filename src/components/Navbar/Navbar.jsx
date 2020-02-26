import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/main" activeClassName={s.activeLink}>Main</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/parents" activeClassName={s.activeLink}>Parents</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/kittens" activeClassName={s.activeLink}>Kittens</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/exhibitions" activeClassName={s.activeLink}>Exhibitions</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/reviews" activeClassName={s.activeLink}>Reviews</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/about-us" activeClassName={s.activeLink}>AboutUs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/blog" activeClassName={s.activeLink}>Blog</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/contacts" activeClassName={s.activeLink}>Contacts</NavLink>
            </div>

        </nav>
    )
};

export default Navbar;