import productInitialState from './ProductsInitialState';
import { ADD_PRODUCT } from '../../actions/ActionTypes';

export const ProductCrudReducer = (state = productInitialState.products, action) => {
  switch (action.type) {
    case ADD_PRODUCT :
      const id = ((state.details).length) + 1;
      const list = [...state.list, id];
      const details = [...state.details, Object.assign({}, action.product, {_id: id})];
      const grandTotal = (parseInt(state.grandTotal) + (action.product.price * action.product.quantity)).toFixed(2);
      return Object.assign({}, {list, details, grandTotal});
    default:
      return state;
  }
};