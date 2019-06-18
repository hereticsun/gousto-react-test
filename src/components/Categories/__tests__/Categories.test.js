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
          expect(drinksCabinet.find(Link)).toHaveLength(1);
          expect(drinksCabinet.find(Link).prop('to')).toEqual(`/${props.categories[0].id}`);
        });

        describe('and I arrive at the main page with categoryId passed as a param', () => {
          props.categoryId = '1';
          const element = shallow(<Categories {...props} />);
          const drinksCabinet = element.find('.categories__category').first();

          it('displays the chosen category in bold text', () => {
            expect(drinksCabinet.hasClass('categories__category--active')).toBeTruthy();
            expect(drinksCabinet.find(Link).props().style).toEqual({fontWeight: 'bold'});
          });
        });
      });
    });
  });
});
