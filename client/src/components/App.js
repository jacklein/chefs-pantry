import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import SideDrawer from './SideDrawer';
import CategoryTable from './CategoryTable';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={this.props.classes.root}>
          <Header />
          <SideDrawer />
          <Route exact path='/' component={CategoryTable} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
