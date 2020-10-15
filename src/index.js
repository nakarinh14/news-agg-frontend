import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#819ca9',
            main: '#546e7a',
            dark: '#29434e',
            contrastText: '#ffffff',
        },
    },
});


ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
