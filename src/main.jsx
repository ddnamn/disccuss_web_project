<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
>>>>>>> eda260c6dedbe90714c394baec290db91c2dc5c9

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
<<<<<<< HEAD
  </React.StrictMode>
);
=======
    </Provider>
  </React.StrictMode>,
)
>>>>>>> eda260c6dedbe90714c394baec290db91c2dc5c9
