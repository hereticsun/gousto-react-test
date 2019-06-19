import { FETCH_CATEGORIES, SELECT_CATEGORY } from '../actions/constants';

export const CategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      const categories = action.categories.data;
      return categories;
    default:
      return state;
  }
};

export const SelectedCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload.selectedCategory;
  default:
    return state;
  }
};
