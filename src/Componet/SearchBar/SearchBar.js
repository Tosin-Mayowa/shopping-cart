import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const [text,setText]=useState('');
    const dispatch=useDispatch();
    console.log(text);
  return (
 <div className="mb-3 mx-2 mt-3 row">
    <div className="col-sm-8 col-lg-6">
      <input type="text" placeholder='search items' onChange={(e)=>{
          setText(e.target.value);
          dispatch({type:'FILTER',payload:text});
        }} 
        /* onKeyDown={(e)=>{
          console.log(e.key);
          if(e.key==='Enter'){
            setText(e.target.value);
            dispatch({type:'FILTER',payload:text});
          }
        }} */
        className="form-control" />
    </div>
    <div className="col-sm-2 col-lg-2">
    <button className='Btn rounded btn-primary mt-2 btn-sm' type='submit' onClick={()=>dispatch({type:'GO BACK'} )}>Go Back</button>
    </div>
  </div>
  )
}

export default SearchBar;