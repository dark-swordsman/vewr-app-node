import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`
	},
	paper: {
		maxWidth: 400,
		margin: `${theme.spacing.unit}px auto`,
		padding: theme.spacing.unit * 2
	}
});

const message = 'test';
class CommentBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className='slurp'>
					<Grid container wrap='nowrap' spacing={16}>
						<Grid item>
							<Avatar>W</Avatar>
						</Grid>
						<Grid item xs zeroMinWidth>
							<Typography noWrap>{message}</Typography>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}

CommentBox.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommentBox);
