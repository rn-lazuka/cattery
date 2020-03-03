import React, {Component} from 'react';
import s from './Main.module.css'
import Advantages from "./Advantages/Advantages";
import Footer from "../Footer/Footer";


class Main extends Component {
    render() {
        return (
            <div>
                <div className={s.mainBlock}>
                    <div className={s.blockForNav}></div>
                    <div className={s.wrapper}>
                        <div className={s.context}><h1>SUNHUNTERS</h1>
                            <h2> Питомник Бенгальских
                                Кошек </h2>
                            Добро пожаловать на сайт питомника “Sunhunters”.
                            Мы ценим Ваш интерес к нашим бенгальским кошкам и разделяем Ваш энтузиазм в отношении этой
                            захватывающей породы.
                        </div>
                        <div className={s.mainPhoto}>
                        </div>
                    </div>
                </div>
                <Advantages/>
                <Footer/>
            </div>
        );
    }
}

export default Main;