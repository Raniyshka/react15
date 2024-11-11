import { products } from "../../data/data";
import style from './Cart.module.css';
import s from '../../components/Card/Card.module.css'
import {Link} from 'react-router-dom';


export function Cart({cart}){
    const cartProducts = cart.map(id=>products.find(product=>product.id==id));
    const summa = cartProducts.reduce((sum, product)=>sum+product.price, 0);
    return(
        <section>
            <div className="container">
                Итого к оплате: {summa} руб.
                <div className={style.cart_inner}>
                    {
                        cartProducts.map(product=>
                            <div className={s.card}>
                                <div className={s.cardImg}>
                                    <img src={product.image} alt="#" />
                                </div>
                                <h3>{product.name}</h3>
                                <div className={s.price}>{product.price} ₽</div>
                                <Link to={`/catalog/${product.id}`}>Подробнее</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}