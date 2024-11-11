import { useState } from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'
import { OrderModal } from '../OrderModal/OrderModal';

export function Card({id, image='https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7029624787.jpg', name='Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина', price='335', count='2', addToCart}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal(){
        setModalIsOpen(true);
    }
    return(
        <>
            <div className={s.card}>
                <div className={s.cardImg}>
                   <img src={image} alt="" />
                </div>
                <h3>{name}</h3>
                <h3>Осталось в наличии: {count} шт</h3>
                
                <div className={s.cardBottom}>
                  <div className={s.price}>{price} ₽</div>
                  <Link className={s.btn} to={`${id}`}>Подробнее</Link>
                  {
                    count>0 ?
                    // <a href="#">Добавить в корзину</a>
                    <button onClick={addToCart} className={s.btn}>В корзину</button>
                    :
                    <button onClick={showModal} className={s.btn}>Заказать</button>
                  }
                  
                </div>
             </div>
            <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </>
    )
}