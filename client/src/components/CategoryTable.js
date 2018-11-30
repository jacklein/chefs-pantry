import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
})

const CategoryTable = (props) => {
  const { classes } = props;

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <h1> Hello Chef </h1>
    </div>
  );
}

export default withStyles(styles)(CategoryTable);