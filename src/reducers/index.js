import { combineReducers } from 'redux';
import home from './home';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
  home,
  categories: CategoriesReducer,
});

export default rootReducer;