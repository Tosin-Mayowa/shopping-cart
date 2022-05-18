import {products} from './productList'
const initialState={
    items: products,
    cart:[],
    amount:0
}

export default function reducer(state=initialState, action){
  if(action.type==='ADD TO CART'){
    let newItem=state.items.find(item=>item.id===action.payload);
    let newState=state.cart.length===0?{...state,cart:[...state.cart,newItem],amount:[...state.cart,newItem].reduce((a,b)=>a+b.price,0)}:{...state,cart:[...state.cart.reduce((a,b)=>{if(b.id===newItem.id){
const n=[...state.cart];
return n;
    }else{
      const n=[...state.cart,newItem]
      return n;
    }
  },{}),],amount:[...state.cart.reduce((a,b)=>{if(b.id===newItem.id){
const n=[...state.cart];
return n;
    }else{
      const n=[...state.cart,newItem]
      return n;
    }
  },{}),].reduce((a,b)=>a+b.price,0)};
  return newState;

};

if(action.type==='FILTER'){
  const newItems=state.items.filter(item=>item.title.toLowerCase().indexOf(action.payload.toLowerCase())!==-1);
const newSta=action.payload===''? {...state}:{...state,items:newItems};
  return newSta;
};

if(action.type==='DECREASE'){
  let newItems=state.items.map(item=>{
    if(item.id===action.payload.id){
      
      let m = action.payload.counter - 1
       let r=action.payload.counter;
      let newPrice=item.price*m;
      let newest=newPrice/r;

    return ({...item,price:newest,count:m}); 
    }else{
      return item;
    }
  });
  let newCart=state.cart.map(c=>{
    if(c.id===action.payload.id){
      let m = action.payload.counter-1;
      let r=action.payload.counter;
      let newPrice=c.price*m;
      let newest=newPrice/r;
      return {...c,price: newest,count:m};
    }else{
      return c;
    }
  })
  let newAmount=newCart.reduce((a,b)=>a+b.price,0);
  return {...state,items:newItems,cart: newCart,amount: newAmount};
}
if(action.type==='INCREASE'){
  let newItems=state.items.map(item=>{
    if(item.id===action.payload.id){
      let m = action.payload.counter === 1 ? 2 : action.payload.counter; 
      let r=m-1;
      let newPrice=item.price/r;
    return ({...item,price:newPrice*m,count:m}); 
    }else{
      return item;
    }
  });
  let newCart=state.cart.map(c=>{
    if(c.id===action.payload.id){
      let m = action.payload.counter === 1 ? 2 : action.payload.counter; 
      let r=m-1;
      let newPrice=c.price/r;
    
      return {...c,price:newPrice*m,count:m};
    }else{
      return c;
    }
  })
  let newAmount=newCart.reduce((a,b)=>a+b.price,0);
  return {...state,items:newItems,cart: newCart,amount: newAmount};
}

if(action.type==='CLEAR CART'){
  
  return { ...state, cart: [], amount: 0,items: products }
}

if(action.type==='GO BACK'){
  return {...state,
    cart:[],
    amount:0}
}


  return state;
}
