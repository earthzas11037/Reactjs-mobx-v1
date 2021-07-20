import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "mobx-react"
import App from './App';

import AuthenStore from './stores/AuthenStore';

ReactDOM.render(
    <Provider 
      authenProv = {new AuthenStore(this)}
    >
      <App />
    </Provider>,

  document.getElementById('root')
);

