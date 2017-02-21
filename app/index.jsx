import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/app.jsx';
import stores from './stores';
import './styles/html.scss' // background

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('root')
);