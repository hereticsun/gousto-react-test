import fetch from 'cross-fetch';
import { FETCH_CATEGORIES } from './constants';

const categoriesApi = 'https://api.gousto.co.uk/products/v2.0/categories';

// export const fetchCategories = () => {
//   return dispatch => {
//     return fetch(categoriesApi)
//       .then(response => response.json())
//       .then(json => dispatch({
//         type: FETCH_CATEGORIES,
//         categories: json,
//       }));
//   };
// };

export const fetchCategories = () => {
  return dispatch => {
    return fetch(categoriesApi)
      .then(res => {
        if(res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(json => dispatch({
        type: FETCH_CATEGORIES,
        categories: json,
      }))
      .catch(err => {
        console.error(err);
      });
  };
};
