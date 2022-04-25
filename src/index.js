import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';


const container= document.getElementById('root');
const root= createRoot(container);
root.render(<Provider store={store}>
  <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>);
/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); */


