import { CategoriesReducer, SelectedCategoryReducer } from '../categories';
import { FETCH_CATEGORIES, SELECT_CATEGORY } from '../../actions/constants';

describe('CategoriesReducer', () => {
  it('should return the initial state', () => {
    expect(CategoriesReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_CATEGORIES', () => {
    expect(CategoriesReducer([],{
      type: FETCH_CATEGORIES,
      categories: {
        data: [
          {
            id: 1,
            title: 'My Category'
          }
        ]
      }
    }))
    .toEqual([
      {
        id: 1,
        title: 'My Category'
      },
    ]);
  });
});

describe('SelectedCategoryReducer', () => {
  it('should return the initial state', () => {
    expect(SelectedCategoryReducer(undefined, {})).toEqual({});
  });

  it('should handle SELECT_CATEGORY', () => {
    expect(SelectedCategoryReducer([],{
      type: SELECT_CATEGORY,
      payload: {
        selectedCategory: {
          id: 1,
          title: 'My Category'
        }
    }
    }))
    .toEqual(
      {
        id: 1,
        title: 'My Category'
      },
    );
  });
});
