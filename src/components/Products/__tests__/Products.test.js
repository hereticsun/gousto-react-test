import React from 'react';
import { shallow } from 'enzyme';

import {Products} from '../Products';

describe(`<Products />`, () => {
  describe('Given that I am a user', () => {
    describe('when I land on the main page', () => {
      const props = {
        products: [
          {
            id: '1',
            title: 'Borsao Macabeo',
            categories: [{id: 1}],
          },
          {
            id: '2',
            title: 'Love Shortie All Butter Shortbread',
            categories: [],
          },
        ],
        selectedCategory: {},
        fetchProducts: jest.fn()
      };
      const element = shallow(<Products {...props} />);

      it('displays correctly', () => {
        expect(element).toMatchSnapshot();
        expect(element.find('h2').text()).toEqual('Products');
        expect(element.find('SearchBar')).toBeDefined();
        expect(element.find('Product')).toHaveLength(props.products.length);
      });
    });

    describe('when I have selected a category', () => {
      const props = {
        products: [
          {
            id: '1',
            title: 'Borsao Macabeo',
            categories: [{id: 1}],
          },
          {
            id: '2',
            title: 'Love Shortie All Butter Shortbread',
            categories: [],
          },
        ],
        selectedCategory: {id: 1, title: 'My Category'},
        fetchProducts: jest.fn()
      };
      const element = shallow(<Products {...props} />);

      it('displays products filtered by the selected category', () => {
        expect(element.find('h2').text()).toEqual('Products in My Category');
        expect(element.find('Product')).toHaveLength(1);
        expect(element.find('Product').prop('product')).toEqual(
          {
            id: '1',
            title: 'Borsao Macabeo',
            categories: [{id: 1}],
          },

        );
      });

    });
  });
});
