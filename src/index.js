import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
// import {Provider} from 'react-redux'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <HashRouter>
        <App />
      </HashRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
