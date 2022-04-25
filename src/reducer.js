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
  const newItems=state.items.filter(item=>item.title.toLowerCase().includes(action.payload));
const newSta=action.payload===''? state:{...state,items:newItems};
  return newSta;
};

if(action.type==='DECREASE'){
  let newItems=state.items.map(item=>{
    if(item.id===action.payload.id){
       let r=action.payload.count+1;
      let newPrice=item.price*action.payload.count;
      let newest=newPrice/r;

    return ({...item,price:action.payload===1?newPrice/2:newest,count:action.payload.count}); 
    }else{
      return item;
    }
  });
  let newCart=state.cart.map(c=>{
    if(c.id===action.payload.id){
      let r=action.payload.count+1;
      let newPrice=c.price*action.payload.count;
      let newest=newPrice/r;
      return {...c,price: newest,count:action.payload.count};
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
      let r=action.payload.count-1;
      let newPrice=item.price/r;
    return ({...item,price:newPrice*action.payload.count,count:action.payload.count}); 
    }else{
      return item;
    }
  });
  let newCart=state.cart.map(c=>{
    if(c.id===action.payload.id){
      let r=action.payload.count-1;
      let newPrice=c.price/r;
    
      return {...c,price:newPrice*action.payload.count,count:action.payload.count};
    }else{
      return c;
    }
  })
  let newAmount=newCart.reduce((a,b)=>a+b.price,0);
  return {...state,items:newItems,cart: newCart,amount: newAmount};
}

if(action.type==='CLEAR CART'){
  return {...state,cart:[],amount:0}
}

  return state;
}
