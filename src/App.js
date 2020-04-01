import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

// Global Styles
import GlobalStyles from './styles/global';

// Routes
import Routes from './routes';

// Components
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
