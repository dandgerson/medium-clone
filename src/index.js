import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { CurrentUserProvider } from 'contexts/currentUser'

import CurrentUserChecker from 'components/currentUserChecker'
import TopBar from 'components/topBar'
import Routes from 'routes'

const App = () => (
  <CurrentUserProvider>
    <CurrentUserChecker>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </CurrentUserChecker>
  </CurrentUserProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

