import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import categories from '../categories';
import { connect } from 'react-redux';
import { fetchTable } from '../actions';

import Header from './Header';
import SideDrawer from './SideDrawer';
import CategoryDisplay from './CategoryDisplay';
import ModalConductor from './ModalConductor';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class App extends Component {
  async componentDidMount() {
    await this.props.fetchTable(categories[0]);
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.props.classes.root}>
          <Header />
          <SideDrawer categories={categories} />
          <Route exact path='/' component={CategoryDisplay} />
          <ModalConductor />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchTable })(withStyles(styles)(App));
