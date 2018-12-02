import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { DELETE } from '../context';
import { showModal, submitProduct } from '../actions';
import MUIDataTable from './datatable/MUIDataTable';
import ProductForm from './products/ProductForm';

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
  
  onSubmitProduct(props){
    this.props.submitProduct({ category: this.props.currentTable.category, ...props });
  }

  onDeleteProduct(index){
    this.props.showModal({ context: DELETE, index: index });
  }

  render(){
    console.log(this.props.currentTable);
    return (
      <div className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} />

        <ProductForm
          onSubmitProduct={(props) => this.onSubmitProduct(props)}
        />

        <MUIDataTable
          title={this.props.currentTable.text}
          columns={columns}
          data={this.props.currentTable.products} 
          onDelete={(row) => this.onDeleteProduct(row)}
        />

      </div>
    );
  }
}

function mapStateToProps({ currentTable }) {
  return { currentTable };
}

export default connect(mapStateToProps, { showModal, submitProduct })(withStyles(styles)(CategoryDisplay));
