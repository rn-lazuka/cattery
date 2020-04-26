import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Footer from "../Footer/Footer";
import s from './Kittens.module.css'
import {Link} from "react-router-dom";


function Kittens() {
    const kittens = useSelector((state) => state.kittens.kittens);
    const dispatch = useDispatch();
    return (
        <div>
            <div className={'blockForNav'}></div>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.items}>
                        {kittens.map((kitten, i) => {
                            return <div className={s.item} style={{backgroundImage: `url(${kitten.sliderArray[0]})`}}>
                                <div className={s.itemContainer}>
                                    <div><h2>{kitten.name}</h2></div>
                                    <div>
                                            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                                                <div className={s.descriptString}>Дата рождения<div className={s.info}>{kitten.birthDate}</div></div>
                                                <div className={s.descriptString}>Цена в разведение <div className={s.info}>{kitten.price}$</div></div>
                                                <div className={s.descriptString}>Пол <div className={s.info}>{kitten.sex}</div></div>
                                            </div>

                                    </div>
                                    <Link  to={`/kittens/${kitten.name}`}><div className={s.button}>Подробнее</div></Link>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Kittens;