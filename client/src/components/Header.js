import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
})

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography>
            Chef's Pantry
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);