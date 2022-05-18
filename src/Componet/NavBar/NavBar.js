import React from 'react';
import './NavBar.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaShoppingCart} from 'react-icons/fa';
import {useSelector} from 'react-redux';
import {Link}  from 'react-router-dom';
const NavBar = () => {
  const cart=useSelector(state=>state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Mayor</Link>
    <Link to='/cart' className="navbar-brand"><FaShoppingCart/>({cart.length})</Link>
        <div className='anime'>
       <div className='rotateD'></div>
       <p className='appear'>Thank You For Shopping</p>
        </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse "  id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
        <Link to='/' className="nav-link active">Home</Link> 
        </li>
        <li className="nav-item">
        <Link to='/cart' className="nav-link active">Cart</Link>
  
        </li>
      </ul>
          
    </div>
    
  </div>
</nav>
  )
}

export default NavBar;