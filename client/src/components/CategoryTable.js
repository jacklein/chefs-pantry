import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { DELETE } from '../context';
import { showModal } from '../actions';
import DataTable from './DataTable';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
})

const columns = [{ title: 'Product', cell: 'name', numeric: false },
                { title: 'Container', cell: 'container', numeric: false }, 
                { title: 'Metric', cell: 'metric', numeric: false },
                { title: 'Count', cell: 'count', numeric: true },
                { title: 'Notes', cell: 'notes', numeric: false }];

class CategoryTable extends Component{
  constructor(props) {
    super(props);

    this.state = { data: [] }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.currentTable);
    const { currentTable } = this.props;
    const incomingTable = nextProps.currentTable;
    /*if(incomingTable.text !== currentTable.text){
      this.renderData(nextProps.currentTable.products);
    }*/
    this.renderData(incomingTable.products);
  }

  // need to sanitize data before passing to DataTable
  renderData(products){
    const data = [];

    if(products){
      Object.keys(products).map(key => {
        data.push(products[key])
      })
    }

    this.setState({ data });
  }

  onDelete(row){
    this.props.showModal({ context: DELETE, productID: row._id });
  }

  render(){
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} />

        <DataTable
          title={this.props.currentTable.text}
          columns={columns}
          data={this.state.data} 
          onDelete={(row) => this.onDelete(row)}
        />

      </div>
    );
  }
}

function mapStateToProps({ currentTable }) {
  return { currentTable };
}

export default connect(mapStateToProps, { showModal })(withStyles(styles)(CategoryTable));
