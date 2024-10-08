import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice.js';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      price,
      title
    }));
  }

  const decrementtHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementtHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
