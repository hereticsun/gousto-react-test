import { combineReducers } from 'redux';
import home from './home';
import { CategoriesReducer, SelectedCategoryReducer } from './reducer_categories';
import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({
  home,
  categories: CategoriesReducer,
  selectedCategory: SelectedCategoryReducer,
  products: ProductsReducer,
});

export default rootReducer;