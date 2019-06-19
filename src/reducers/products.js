import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from '../actions/constants';

export const ProductsReducer = (state = [], action) => {
  switch (action.type) {
      case FETCH_PRODUCTS:
        const products = action.products.data;
        return products;
    default:
      return state;
  }
};

export const SearchProductsReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return action.payload.searchTerm;
    default:
      return state;
  }
};
