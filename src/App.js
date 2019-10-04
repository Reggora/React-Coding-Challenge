import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import CatSuperList from './components/CatSuperList';
import store from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#70C1B3'
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <h1><img src={logo} className="App-logo" alt="logo" />Cat-Dex</h1>
          </div>
          <CatSuperList/>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
