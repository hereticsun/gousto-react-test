import 'cross-fetch/polyfill';
import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from './constants';

const productsApi = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&image_sizes[]=365';

export const fetchProducts = () => {
  return dispatch => {
    return fetch(productsApi)
      .then(res => {
        if(res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(json => dispatch({
        type: FETCH_PRODUCTS,
        products: json,
      }))
      .catch(err => {
        console.error(err);
      });
  };
};

export const searchProducts = (searchTerm) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      searchTerm
    }
  };
}
