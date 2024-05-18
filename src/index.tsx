import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { stores, StoreContext } from './stores/stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StoreContext.Provider value={stores}>
            <App />
        </StoreContext.Provider>
    </React.StrictMode>
);
