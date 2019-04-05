import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField'
import NavigationIcon from '@material-ui/icons/Navigation'
import Fab from '@material-ui/core/Fab'


const styles = theme => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`
	},

	button: {
		margin: theme.spacing.unit,
		
	},
	
	input: {
		display: 'none',
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	  },
	  iconSmall: {
		fontSize: 20,
	  },
	  textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	  },
	  container: {
		margin: '2.6em',
	  }

	
	
});

const message = 'test';
class uploadWidget extends Component {
	constructor(props) {
		super(props);
  }
  
//   uploadVideo() {
//     new Promise((resolve, reject) => {
//       const ipfs = new Ipfs({ repo: 'ipfs-' + Math.random() });
  
//       ipfs.once('ready', () => {
//         const reader = new FileReader();
//         reader.onloadend = function() {
          
//           const buf = buffer.Buffer(reader.result) // Convert data into buffer
//           ipfs.add(buf, (err, result) => { // Upload buffer to IPFS
//             if(err) {
//               console.error(err)
//               reject(err);
//             }
//             this.setState({ url: `https://ipfstube.erindachtler.me/ipfs/${result[0].hash}` })

//             resolve();
//           })
//         }
//       })
//     })
//     .then((url) => {
//       return rest.post('/video', this.state);
//     })
//     .then((response) => {
//       this.props.router.push(`/video/${response.ipfsLinks[0]}`);
//     });
//   }


	render() {
		const { classes } = this.props;
		return (
		<div className={classes.container}>
			<TextField
          id="standard-with-placeholder"
          label="Video Title"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />
		<TextField
          id="standard-with-placeholder"
          label="Description"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />
		
		<div>
				 <input
        accept="image/*"
        className={classes.input}
        id="submitter"
        multiple
        type="file"
      />
      <label htmlFor="submitter">
	  
        <Button variant="contained" component="span" className={classes.button} onClick={() => this.uploadVideo()}>
          Choose file
		
        </Button>
		
		
      </label>
	  <Fab variant="extended" color="" aria-label="Add" className={classes.margin}>
          
          Upload
		  <CloudUploadIcon className={classes.rightIcon} />
        </Fab>
			
		</div>
		</div>
			
		);
	}
}

uploadWidget.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(uploadWidget);
