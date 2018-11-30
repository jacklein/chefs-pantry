import React from 'react';
import categories from '../categories';
import map from 'lodash/map';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
})

const SideDrawer = (props) => {
  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button> 
          <ListItemText primary={'View All'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((category, index) => (
          <ListItem button key={category.category}>
            <ListItemText primary={category.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(SideDrawer);