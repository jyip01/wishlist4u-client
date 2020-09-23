import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { WishListProvider } from './contexts/WishListContext';
import { ListProvider } from './contexts/ListContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <WishListProvider> 
        <ListProvider>
          <App />
        </ListProvider>
      </WishListProvider>    
    </BrowserRouter>, 
    document.getElementById('root')
);