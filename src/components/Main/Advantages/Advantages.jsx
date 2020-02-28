import React from 'react';
import s from './Advantages.module.css'

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
                </div>
            </div>
        </div>
    );
}

export default Advantages;