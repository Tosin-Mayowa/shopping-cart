import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CartItem.css';
import CartBtn from '../CartBtn/CartBtn';
const CartItem = ({title,price,src,id,count}) => {
const dispatch=useDispatch();


  return (
    <>
    <div className='col-3 mt-3'>
    <img src={src} className="img-thumbnail w-50" alt=""></img>
    </div>
    <div className='col-7 mt-3'>
    <h6 >{title}</h6>
    <h1>N{price}</h1>
    </div>
    <div className='col-2 mt-3'>
   <CartBtn  id={id} count={count}/>
    </div>
    
    </>
  )
}

export default CartItem;