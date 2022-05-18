import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import './CartBtn.css';
export default function CartBtn({id, count}) {
    const [counter,setCounter]=useState(count);
const dispatch=useDispatch();
    if (counter===1){
        return (
            <>
                
                <div className='numer'>{counter}</div>
                <div className='Inc' onMouseDown={()=>{
                setCounter(prev=>prev+1);
                    dispatch({ type: 'INCREASE', payload: { id, counter } })
            }} 
            >+</div>
        </>) 
    }

    return (
        <>
            <div className='Dec' onMouseDown={() => {
                setCounter(prev => prev - 1);
                dispatch({ type: 'DECREASE', payload: { id, counter } })
            }} 
            >-</div>
            <div className='numer' >{counter}</div>
            <div className='Inc'
                onMouseDown={() => {
                    setCounter(prev => prev + 1);
                }}
                onMouseUp={() => {
                    dispatch({ type: 'INCREASE', payload: { id, counter } })
                }}

            >+</div>
        </>
    ) 

  
}