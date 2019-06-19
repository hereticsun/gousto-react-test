import { ProductsReducer, SearchProductsReducer } from '../products';
import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from '../../actions/constants';

describe('ProductsReducer', () => {
  it('should return the initial state', () => {
    expect(ProductsReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_PRODUCTS', () => {
    expect(ProductsReducer([],{
      type: FETCH_PRODUCTS,
      products: {
        data: [
          {
            id: 1,
            title: 'My Product'
          }
        ]
      }
    }))
    .toEqual([
      {
        id: 1,
        title: 'My Product'
      },
    ]);
  });
});

describe('SearchProductsReducer', () => {
  it('should return the initial state', () => {
    expect(SearchProductsReducer(undefined, {})).toEqual('');
  });

  it('should handle SEARCH_PRODUCTS', () => {
    expect(SearchProductsReducer([],{
      type: SEARCH_PRODUCTS,
      payload: {
        searchTerm: 'cat'
    }
    }))
    .toEqual('cat');
  });
});
