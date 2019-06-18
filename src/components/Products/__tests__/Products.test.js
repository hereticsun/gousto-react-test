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
        fetchProducts: jest.fn()
      };
      const element = shallow(<Products {...props} />);

      it('displays the list of product titles', () => {
        expect(element).toMatchSnapshot();
        expect(element.find('Product')).toHaveLength(props.products.length);
      });
    });
  });
});
