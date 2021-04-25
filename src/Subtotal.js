import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
// import { SportsBasketball } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

    const history = useHistory(); // save history of browser (use it to push "/payment" page after button "Proceed to checkout")
    const [{basket}] = useStateValue();// object basket to pull data by keywords

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
