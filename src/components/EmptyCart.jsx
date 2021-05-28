import React from "react";
import emptyCart from "../img/empty-cart.png";
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return(
        <div className="cart cart--empty">
            <h2>Кошик порожній</h2>
            <p>
                Швидше за все, ви ще не вибрали піцу<br/>
                Для того щоб замовити піцу перейдіть на головну сторінку
            </p>
            <img src={emptyCart} alt="Empty cart"/>
            <Link to="/" className="button button--black">
                <span>Повернутись назад</span>
            </Link>
        </div>
    )
}

export default EmptyCart;