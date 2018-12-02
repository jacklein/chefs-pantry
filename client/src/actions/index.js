import axios from 'axios';
import { FETCH_TABLE, DELETE_PRODUCT, SHOW_MODAL, CLOSE_MODAL } from './types';

export const fetchTable = ({ text, category }) => async dispatch => {
  const { data } = await axios.get('/api/products', { params: { category }});
  const products = data;

  dispatch({ type: FETCH_TABLE, payload: {text, products}})
}

export const deleteProduct = ({ index, row }) => async dispatch => {
  const res = await axios.delete(`/api/product`, {data: {id: row._id}});
  
  if(res.status === 200){
    dispatch({ type: DELETE_PRODUCT, payload: index });
  }
}

export const showModal = props => async dispatch => {
  dispatch({ type: SHOW_MODAL, payload: props });
}

export const closeModal = () => async dispatch => {
  dispatch({ type: CLOSE_MODAL });
}