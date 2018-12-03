import React from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchTable } from '../../actions';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const SideDrawer = props => {
  const { classes, fetchTable } = props;
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
        {_.map(props.categories, category => (
          <ListItem 
            button 
            key={category.category}
            onClick={() => fetchTable(category)}
          >
            <ListItemText primary={category.text} />
          </ListItem>
        ))}
      </List>
      
    </Drawer>
  );
}

SideDrawer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object)
}

export default connect(null, { fetchTable })(withStyles(styles)(SideDrawer));