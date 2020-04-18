import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Footer from "../Footer/Footer";
import s from './Kittens.module.css'
import {Link} from "react-router-dom";


function Kittens() {
    const parents = useSelector((state) => state.parents.parents);
    const dispatch = useDispatch();
    return (
        <div>
            <div className={'blockForNav'}></div>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <h1>Males</h1>
                    <div className={s.items}>
                        {parents.map((parent, i) => {
                            if (parent.sex === "male") {
                                return <div className={s.itemContainer}><Link to={`/parents/${parent.name}`}>
                                    <div>{parent.name}</div>
                                    <div className={s.item} style={{backgroundImage: `url(${parent.sliderArray[0]})`}}/>
                                </Link></div>
                            }
                        })}
                    </div>
                    <h1>Females</h1>
                    <div className={s.items}>
                        {parents.map((parent, i) => {
                            if (parent.sex === "female") {
                                return <div className={s.itemContainer}><Link to={`/parents/${parent.name}`}>
                                    <div>{parent.name}</div>
                                    <div className={s.item} style={{backgroundImage: `url(${parent.sliderArray[0]})`}}/>
                                </Link></div>
                            }
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Kittens;