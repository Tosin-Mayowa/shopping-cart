import React from 'react';
import {useSelector} from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';

export default function ProductContainer(){
    const prods=useSelector(state=>state.items);

    return(
<div className="container">
<div className="row">
{prods.map(p=><Product p={p} key={p.id}/>)}
</div>
</div>
    )
}


