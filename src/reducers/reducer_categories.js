import { FETCH_CATEGORIES } from '../actions/constants';

const categories = (state = [], action) => {
  switch (action.type) {
      case FETCH_CATEGORIES:
        const categories = action.categories.data;
        return categories;
    default:
      return state;
  }
};

export default categories;
