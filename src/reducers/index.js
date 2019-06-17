import { combineReducers } from 'redux';
import home from './home';
import CategoriesReducer from './reducer_categories';
import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({
  home,
  categories: CategoriesReducer,
  products: ProductsReducer,
});

export default rootReducer;