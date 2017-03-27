import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import querystring from 'querystring';

import App from './components/app.jsx';
import stores from './stores';
import './styles/html.scss'; // background
import './styles/container.scss'; // background

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('root')
);

