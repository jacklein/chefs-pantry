import React from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../../actions';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

import ProductForm from '../products/ProductForm';

const EditProductModal = props => {
  const editProduct = async (data) => {
    const { index } = props.currentModal;
    
    await props.editProduct({ index, data });
    props.closeModal(); 
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={props.closeModal}
        aria-labelledby="Edit Product Modal"
        aria-describedby="Edit a product"
      > 
        <DialogTitle id="alert-dialog-title">{"Edit Product"}</DialogTitle>
        <DialogContent>
          <ProductForm 
            onSubmitProduct={editProduct} 
            form="editProductForm"
            initialValues={props.currentTable.products[props.currentModal.index]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.closeModal()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

function mapStateToProps({ currentTable }) {
  return { currentTable };
}

export default connect(mapStateToProps, { editProduct })(EditProductModal);