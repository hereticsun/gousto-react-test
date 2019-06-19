import React from 'react';
import { shallow } from 'enzyme';

import {SearchBar} from '../SearchBar';

describe(`<SearchBar />`, () => {
  describe('Given that I am a user', () => {
    describe('when the page is rendered', () => {
      const element = shallow(<SearchBar />);

      it('displays the search bar', () => {
        expect(element).toMatchSnapshot();
      });
    });
  
    describe('when I type into the search input', () => {
      const props = {
        searchProducts: jest.fn(),
      };
      const element = shallow(<SearchBar {...props} />);
      const event = {
        target: { value: 'serv' }
      };
      it('dispatches the `searchProducts` action', () => {
        element.find('input').simulate('change', event);
        expect(props.searchProducts).toBeCalledWith('serv');
      });
    });
  
  });
})
