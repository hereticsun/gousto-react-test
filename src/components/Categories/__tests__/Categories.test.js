import React from 'react';
import { shallow } from 'enzyme';

import {Categories} from '../Categories';

describe(`<Categories />`, () => {
  describe('Given that I am a user', () => {
    describe('when I land on the main page', () => {
      const props = {
        categories: [
          {
            id: '1',
            title: 'Drinks Cabinet',
          },
          {
            id: '2',
            title: 'Kitchenware',
          },
        ],
        fetchCategories: jest.fn()
      };
      const element = shallow(<Categories {...props} />);

      it('displays the categories of products', () => {
        expect(element).toMatchSnapshot();
        expect(element.find('li')).toHaveLength(props.categories.length);
      });
    });
  });
});
