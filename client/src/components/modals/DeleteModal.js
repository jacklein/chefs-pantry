import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

const DeleteModal = props => {
  const deleteProduct = async () => {
    const { index } = props.currentModal;
    
    await props.deleteProduct({ index: index, row: props.currentTable.products[index] });
    props.closeModal();
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={props.closeModal}
        aria-labelledby="Delete Product Modal"
        aria-describedby="Delete a product"
      > 
        <DialogTitle id="alert-dialog-title">{"Delete Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteProduct()}>Confirm</Button>
          <Button onClick={() => props.closeModal()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

function mapStateToProps({ currentTable }) {
  return { currentTable };
}

export default connect(mapStateToProps, { deleteProduct })(DeleteModal);