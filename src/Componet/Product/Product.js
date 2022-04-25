import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
const dispatch= useDispatch();

  const {title,id,src,price}=props.p;
  return (
    <div className='col-xs-6 col-md-4 col-lg-3 mt-3 Product'>
<img src={src} className='w-75' alt="" />
    <h4 className=''>{title}</h4>
    <p>N{price}</p>
    <button onClick={()=>dispatch({type:'ADD TO CART', payload:id} )}>ADD TO CART</button>
    </div>
  )
}

export default Product;