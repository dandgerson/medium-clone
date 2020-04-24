import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import TopBar from 'components/topBar'
import Routes from 'routes'

const App = () => (
  <div>
    <BrowserRouter>
      <TopBar />
      <Routes />
    </BrowserRouter>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

