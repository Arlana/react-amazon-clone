import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

// props = id, image, title, price, rating
function CheckoutProduct( {id, image, title, price, rating} ) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // dispatch action
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (

        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">

                <p className = "checkoutProduct__title">{title}</p>
                <p className = "checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = "checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><span role="img">⭐</span></p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
