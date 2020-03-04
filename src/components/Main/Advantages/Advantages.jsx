import React from 'react';
import s from './Advantages.module.css'
import Advantage from "./Advantage/Advantage";
import documents from '../../../assets/images/mainIcons/documents.png'
import delivery from '../../../assets/images/mainIcons/delivery.png'
import cat from '../../../assets/images/mainIcons/cat.png'
import character from '../../../assets/images/mainIcons/character.png'
import price from '../../../assets/images/mainIcons/wallet.png'

function Advantages() {
    return (
        <div className={s.advBlock}>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <h3>ПРЕИМУЩЕСТВА НАШЕГО ПИТОМНИКА</h3>
                    Мы выращиваем только чистокровных кошек бенгальской породы.
                    Будем рады видеть Вас в числе наших клиентов!
                </div>
                <div className={s.itemsBlock}>
                    <Advantage icon={documents} title={'Документы'} description={'Заключаем официальный договор  и предоставляем все необходимые справки и документы на наших питомцев.'}/>
                    <Advantage icon={delivery} title={'Доставка'} description={'Мы осуществляем доставку котят по всему миру. Наши котята живут в Америке, Канаде, Франции, Германии, Египте и др. странах.'}/>
                    <Advantage icon={cat} title={'Профессиональный уход'} description={'Каждый питомец воспитан в семье, социализирован, приучен к лотку, когтеточке и имеет все необходимые прививки.'}/>
                    <Advantage icon={character} title={'Характер'} description={'Все наши котята игривые, домашние, любят людей и других питомцев, даже собак.'}/>
                    <Advantage icon={price} title={'Доступные цены'} description={'Цены на котят варьируются от 500-800$ (пет класс) и выше breed/show класс'}/>
                </div>
            </div>
        </div>
    );
}

export default Advantages;