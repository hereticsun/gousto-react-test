import React from 'react';
import { shallow } from 'enzyme';

import {Product} from '../Product';

describe(`<Product />`, () => {
  describe('Given that I am a user', () => {
    const props = {
      product: {
        id: '1',
        title: 'Borsao Macabeo',
        description: 'A flavoursome Summer wine made from the indigenous Macabeo grape in northern Spain. A balanced, modern white with flavours of ripe peach, zesty lemon and nutty undertones, it leaves the palate with a clean and fruity finish.',
      }
    }

  describe('when I land on the main page', () => {
      const element = shallow(<Product {...props} />);

      it('displays the product', () => {
        expect(element).toMatchSnapshot();
        expect(element.find('.product__title')).toBeDefined();
        expect(element.find('.product__title').props().style).not.toEqual({fontWeight: 'bold'});
        expect(element.find('.product__description').hasClass('product__description--expanded')).toBeFalsy();
      });
    });

    describe('when I click on the product title', () => {
      const element = shallow(<Product {...props} />);
      it('displays the expanded product', () => {
        element.find('.product__title').simulate('click');
        expect(element).toMatchSnapshot();
        expect(element.find('.product__title').props().style).toEqual({fontWeight: 'bold'});
        expect(element.find('.product__description').hasClass('product__description--expanded')).toBeTruthy();
      });
    });

    describe('when I click on the product title a second time', () => {
      const element = shallow(<Product {...props} />);
      it('displays the collapsed product', () => {
        element.find('.product__title').simulate('click');
        element.find('.product__title').simulate('click');
        expect(element).toMatchSnapshot();
        expect(element.find('.product__title').props().style).not.toEqual({fontWeight: 'bold'});
        expect(element.find('.product__description').hasClass('product__description--expanded')).toBeFalsy();
      });
    });
  });
});
