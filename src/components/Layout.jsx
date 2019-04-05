import React, { Component } from 'react';
import NavBar from './navbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles/'

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#0b5994',
      },
      secondary: {
          main: '#1d83c6',
      },
  },
});

class Layout extends Component {
  render() {
    return (
    
      <MuiThemeProvider>
      <div>
				<NavBar />
        {this.props.children}
      </div>
      </MuiThemeProvider>

    
    );
  }
}

export default Layout;