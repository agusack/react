import React from 'react';
import './CartWidget.css';
import { MdShoppingCart } from "react-icons/md";

function CartWidget() {
  return (
    <button className='button'>
        <MdShoppingCart className='icon' />
    </button>
  )
}

export default CartWidget
