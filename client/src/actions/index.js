import axios from 'axios';
import { reset } from 'redux-form';
import { FETCH_TABLE, SUBMIT_PRODUCT, EDIT_PRODUCT,
  DELETE_PRODUCT, SHOW_MODAL, CLOSE_MODAL } from './types';

export const fetchTable = ({ text, category }) => async dispatch => {
  const { data } = await axios.get('/api/products', { params: { category }});
  const products = data;

  dispatch({ type: FETCH_TABLE, payload: {text, category, products}})
}

export const submitProduct = data => async dispatch => {
  const res = await axios.post('/api/product', data);

  if(res.status === 200){
    dispatch({ type: SUBMIT_PRODUCT, payload: res.data });
    dispatch(reset('productForm'));
  }
}

export const editProduct = ({ index, data }) => async dispatch => {
  const res = await axios.put('/api/product', data);

  if(res.status === 200){
    dispatch({ type: EDIT_PRODUCT, payload: { index, product: res.data } });
  }
}

export const deleteProduct = ({ index, data }) => async dispatch => {
  const res = await axios.delete('/api/product', {data: {id: data._id}});
  
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