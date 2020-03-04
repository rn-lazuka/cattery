import React from 'react';
import s from './Footer.module.css'
import fb from '../../assets/images/footerIcons/facebook.png'
import telegram from '../../assets/images/footerIcons/telegram.png'
import whatsapp from '../../assets/images/footerIcons/whatsapp.png'
import instagram from '../../assets/images/footerIcons/instagram.png'
import mobile from '../../assets/images/footerIcons/phone-call.png'

function Footer() {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                Sunhunters
            </div>
            <nav className={s.items}>
                <a href={"https://www.facebook.com/best.bengals"} target={'_blank'}>
                    <img src={fb} alt="#"/>
                </a>
                <a href={"#"} target={'_blank'}>
                    <img src={telegram} alt="#"/>
                </a>
                <a href={"https://wa.me/375296518395"} target={'_blank'}>
                    <img src={whatsapp} alt="#"/>
                </a>
                <a href={"https://www.instagram.com/best.bengals/"} target={'_blank'}>
                    <img src={instagram} alt="#"/>
                </a>
                <a href={"tel:+375(29)651-83-95"}>
                    <img src={mobile} alt="#"/>
                </a>

            </nav>
            <div className={s.allRights}>2020 © Все права защищены</div>
        </div>
    );
}

export default Footer;