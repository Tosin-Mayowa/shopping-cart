import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CartItem.css';
const CartItem = ({title,price,src,id,count}) => {
const dispatch=useDispatch();
const [qty,setQty]=useState(count)

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
    <h1 className='Cart-Dec'
    onMouseDown={()=>{
      setQty((prev)=>prev===1?1:prev-1)
     
    }}
    onMouseUp={()=>{
       dispatch({type:'DECREASE',payload:{id:id,count:qty}});
    }}
    >
    -
    </h1>
      <span>{qty}</span>
    <h1
    className='Cart-Incr'
    onMouseDown={()=>{
      setQty(qty+1);
 }}

  onMouseUp={()=>{
       dispatch({type:'INCREASE',payload:{id:id,count:qty}});
    }}
    >
   +
    </h1>
    </div>
    
    </>
  )
}

export default CartItem;