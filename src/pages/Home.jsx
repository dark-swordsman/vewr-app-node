import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className='videoPlayer'>
        <div className='textBeforeVid'>
          <Typography component='h2' variant='display2'>
            Home
          </Typography>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);