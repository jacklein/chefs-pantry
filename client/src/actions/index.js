import mapKeys from 'lodash/mapKeys';
import axios from 'axios';
import { FETCH_TABLE, DELETE_PRODUCT, SHOW_MODAL, CLOSE_MODAL } from './types';

export const fetchTable = ({ text, category }) => async dispatch => {
  const { data } = await axios.get('/api/products', { params: { category }});
  const products = { ...mapKeys(data, '_id') };

  dispatch({ type: FETCH_TABLE, payload: {text, products}})
}

export const deleteProduct = props => async dispatch => {
  await axios.delete(`/api/product`, {data: {id: props.productID}});

  dispatch({ type: DELETE_PRODUCT, payload: props.productID });
}

export const showModal = props => async dispatch => {
  dispatch({ type: SHOW_MODAL, payload: props });
}

export const closeModal = () => async dispatch => {
  dispatch({ type: CLOSE_MODAL });
}