import React from 'react';
import { DELETE_PRODUCT, EDIT_PRODUCT } from '../context';
import { closeModal } from '../actions'
import { connect } from 'react-redux';

import DeleteProductModal from './modals/DeleteProductModal';
import EditProductModal from './modals/EditProductModal';

const ModalConductor = props => {
  switch(props.currentModal.context){
    case DELETE_PRODUCT:
      return <DeleteProductModal {...props} />
    case EDIT_PRODUCT:
      return <EditProductModal {...props} />
    default:
      return null;
  }
}

function mapStateToProps({ currentModal, currentTable }) {
  return { currentModal, currentTable };
}

export default connect(mapStateToProps, { closeModal })(ModalConductor);