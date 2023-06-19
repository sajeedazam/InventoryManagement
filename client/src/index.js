import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { itemReducer } from './reducers';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
    reducer: { items: itemReducer }
});

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
