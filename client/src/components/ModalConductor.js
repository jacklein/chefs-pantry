import React from 'react';
import { DELETE } from '../context';
import { closeModal } from '../actions'
import { connect } from 'react-redux';

import DeleteModal from './modals/DeleteModal';

const ModalConductor = props => {
  switch(props.currentModal.context){
    case DELETE:
      return <DeleteModal {...props} />
    default:
      return null;
  }
}

function mapStateToProps({ currentModal }) {
  return { currentModal };
}

export default connect(mapStateToProps, { closeModal })(ModalConductor);