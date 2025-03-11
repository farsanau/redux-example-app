import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Wrap the app with Provider and pass the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>)
