import { FETCH_PRODUCTS } from '../actions/constants';

const products = (state = [], action) => {
  switch (action.type) {
      case FETCH_PRODUCTS:
        const products = action.products.data;
        return products;
    default:
      return state;
  }
};

export default products;
