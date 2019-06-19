import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom'

import {Categories} from '../Categories';

describe(`<Categories />`, () => {
  describe('Given that I am a user', () => {
    describe('when I land on the main page', () => {
      let props = {
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
        selectedCategory: {},
        fetchCategories: jest.fn()
      };
      const element = shallow(<Categories {...props} />);

      it('displays the categories of products', () => {
        expect(element).toMatchSnapshot();
        expect(element.find('li')).toHaveLength(props.categories.length);
      });

      describe('And I click on `Drinks Cabinet` category', () => {
        const element = shallow(<Categories {...props} />);

        it('links to the main page with the categoryId passed as a param', () => {
          const drinksCabinet = element.find('.categories__category').first();
          expect(drinksCabinet.find('button')).toHaveLength(1);
        });

        describe('and I arrive at the main page with categoryId passed as a param', () => {
          props.selectedCategory = { id: '1', title: 'Drinks Cabinet'};
          const element = shallow(<Categories {...props} />);
          const drinksCabinet = element.find('.categories__category').first();

          it('displays the chosen category in bold text', () => {
            expect(drinksCabinet.hasClass('categories__category--active')).toBeTruthy();
            expect(drinksCabinet.find('button').props().style).toEqual({fontWeight: 'bold'});
          });
        });
      });
    });
  });
});
