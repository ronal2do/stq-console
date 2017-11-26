/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  main: '#922c88',
  mainDark: '#922c88',
  secondary: '#392C70',
  transition: 'all 300ms linear',
  shadow: '0px 7px 20px 0px rgba(0, 0, 0, 0.1)',
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
