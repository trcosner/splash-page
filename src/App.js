import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './containers/AppContainer';

const App = (props) => (
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>
);

export default App;
