import React, { Component } from 'react';
import NavBar from './navbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles/'
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline'


const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})
class Layout extends Component {
  render() {
    return (
    
      <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
				<NavBar />
        {this.props.children}
      </div>
      </MuiThemeProvider>

    
    );
  }
}

export default Layout;