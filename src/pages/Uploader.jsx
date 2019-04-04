import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
import UploadWidget from '../components/UploadWidget'

class Uploader extends Component {
  render() {
    return (
    <div>
      <div className='videoPlayer'>
        <div className='textBeforeVid'>
          <Typography component='h2' variant='display2'>
            Uploader
          </Typography>
        </div>
      </div>
      <div>
        <UploadWidget />
      </div>
    </div>
    );
    
  }
}

export default withRouter(Uploader);