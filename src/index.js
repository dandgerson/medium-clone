import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'

const App = () => (
  <div>
    <div><span>Welcome to hooks</span></div>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

