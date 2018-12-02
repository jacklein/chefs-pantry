import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { DELETE } from '../context';
import { showModal } from '../actions';
import MUIDataTable from './datatable/MUIDataTable';

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

class CategoryDisplay extends Component{
  
  onDelete(index){
    this.props.showModal({ context: DELETE, index: index });
  }

  render(){
    console.log(this.props.currentTable);
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} />

        <MUIDataTable
          title={this.props.currentTable.text}
          columns={columns}
          data={this.props.currentTable.products} 
          onDelete={(row) => this.onDelete(row)}
        />

      </div>
    );
  }
}

function mapStateToProps({ currentTable }) {
  return { currentTable };
}

export default connect(mapStateToProps, { showModal })(withStyles(styles)(CategoryDisplay));
