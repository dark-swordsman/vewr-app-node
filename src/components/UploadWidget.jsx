import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import IPFS from 'ipfs';
import bufferImport from 'buffer/';

const Buffer = bufferImport.Buffer;

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
});

class uploadWidget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			ipfsLinks: [],
		}
  }
  
  uploadVideo(files) {
		const { ipfsLinks } = this.state;
    new Promise((resolve, reject) => {
      const node = new IPFS({ repo: 'ipfs-' + Math.random() });
			const reader = new FileReader();
  
			node.once('ready', () => {
				
				reader.addEventListener('load', (e) => {
					const video = Buffer.from(e.target.result);
					
					node.add(video, (err, result) => { // Upload buffer to IPFS
						if(err) {
							console.error(err)
							return reject(err);
						}

						ipfsLinks.push(`https://ipfstube.erindachtler.me/ipfs/${result[0].hash}`);
						this.setState({ ipfsLinks });
						
						resolve();
					});
				});

				reader.readAsArrayBuffer(files[0]) // Convert data into buffer
			});
			
		})
    .then(() => {
			// TODO: implment post to actually upload video
      // return rest.post('/video', this.state);
    })
    // .then((response) => {
    //   this.props.router.push(`/video/${response.ipfsLinks[0]}`);
    // });
  }

	render() {
		const { classes } = this.props;
		return (
		<div>
			<input
				accept="video/*"
				className={classes.input}
				id="outlined-button-file"
				multiple
				type="file"
				onChange={(e) => this.uploadVideo(e.target.files)}
			/>
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
					Upload
        </Button>
      </label>
			
		</div>
			
		);
	}
}

uploadWidget.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(uploadWidget);
