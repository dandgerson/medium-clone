import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { CurrentUserProvider } from 'contexts/currentUser'

import TopBar from 'components/topBar'
import Routes from 'routes'

const App = () => (
  <CurrentUserProvider>
    <BrowserRouter>
      <TopBar />
      <Routes />
    </BrowserRouter>
  </CurrentUserProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

