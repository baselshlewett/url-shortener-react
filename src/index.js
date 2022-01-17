import React from 'react';
import ReactDOM from 'react-dom';

// import router so our application can handle multiple routes
import { BrowserRouter } from 'react-router-dom';

// import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Provider } from 'react-redux';

// import store from './store/onboard';

import './index.css';
import App from './App';

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);
