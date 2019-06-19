import { combineReducers } from 'redux';
import { CategoriesReducer, SelectedCategoryReducer } from './categories';
import { ProductsReducer, SearchProductsReducer } from './products';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  selectedCategory: SelectedCategoryReducer,
  products: ProductsReducer,
  searchTerm: SearchProductsReducer,
});

export default rootReducer;