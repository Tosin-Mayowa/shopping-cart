import { createStore } from 'redux';
import reducer from '../reducer';
import {products} from '../productList';
const initialStore={
    items: products,
    cart:[],
}
export const store = createStore(reducer,initialStore);


