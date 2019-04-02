import React, { Component } from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import NavBar from './components/navbar';
import { Typography } from '@material-ui/core';
import CommentBox from './components/commentbox';

class App extends Component {
	render() {
		return (
			<div className='leftSide'>
				<NavBar />
				<div className='videoPlayer'>
					<div className='textBeforeVid'>
						<Typography component='h2' variant='display2'>
							Vewr Pre-Alpha
						</Typography>
						<Typography component='h2' variant='caption'>
							Posted by Abraham Mitchell
						</Typography>
					</div>
					<div className='video'>
						<ReactPlayer width='800px' height='450px' controls url='https://ipfstube.erindachtler.me/ipfs/QmU1GSqu4w29Pt7EEM57Lhte8Lce6e7kuhRHo6rSNb2UaC' />
					</div>
					<div className='commentBox'>
						<CommentBox />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
