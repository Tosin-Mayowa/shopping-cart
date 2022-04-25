import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CartItem from '../CartItem/CartItem';
import './CartContainer.css';
const CartContainer = () => {
    const carts=useSelector(state=>state.cart);
    const total=useSelector(state=>state.amount);
   const dispatch=useDispatch();
   
  return (
  
    <div className='container' id='cart'>
    <div className="row">
    {carts.map(cart=><CartItem key={cart.id} {...cart} />)}
    </div>
    <hr className='Horizontal'/>
    <div className='Cart-Total'>
    <h4 >Total</h4>
    <h4>N{total}</h4>
    </div>
   <div className="d-grid gap-2 col-6 mt-5 mx-auto">
  <button className="btn btn-outline-primary fs-2" type="button" onClick={()=>{
    dispatch({type:'CLEAR CART'});
  }}>Clear Cart</button>
  
</div>
    </div>
  )
}

export default CartContainer;