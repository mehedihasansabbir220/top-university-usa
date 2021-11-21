import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    // console.log(props)
    const { cart } = props;
    /*  console.log(cart) */
    let total = 0;
    let totalQuantity = 0;
    let universityName = '  ';
    for (const university of cart) {
        if (!university.quantity) {
            university.quantity = 1;
        }
        total = total + university.Cost * university.quantity;
        totalQuantity = totalQuantity + university.quantity;
        universityName = university.name + ' , ' + universityName;
    };
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <h5>University added : {totalQuantity} 
                <FontAwesomeIcon icon={faShoppingCart} />
            </h5>
            <br />
            <h3>Total Cost  : $ {total.toFixed(2)}</h3>
            <p>University Name: {universityName}</p>

        </div>
    );
};

export default Cart;