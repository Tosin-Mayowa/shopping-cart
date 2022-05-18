import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import './Button.css';
export default function Buttons({id}) {
    const [counter,setCounter]=useState(1);
const dispatch=useDispatch();
    if (counter===1){
        return (
            <div className='Btn'>
                
                <div className='numer'>{counter}</div>
                <div className='Inc' onMouseDown={()=>{
                setCounter(prev=>prev+1);
                    dispatch({ type: 'INCREASE', payload: { id, counter } })
            }} 
            >+</div>
        </div>) 
    }

    return (
        <div className='Btn'>
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
        </div>
    ) 

  
}