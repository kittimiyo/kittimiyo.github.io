import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import querystring from 'querystring';

import App from './components/app.jsx';
//import Sheets from './components/sheets.jsx';
import stores from './stores';
import './styles/html.scss' // background

//const query = querystring.parse(window.location.search.substr(1));
//if (query.admin) {
//  console.log('ask for admin console:', query);
//  ReactDOM.render(<Sheets />, document.getElementById('root'));
//} else {
  ReactDOM.render(
    <Provider { ...stores }>
      <App />
    </Provider>,
    document.getElementById('root')
  );
//}

