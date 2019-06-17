import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../Home';
import Categories from '../../Categories';
import Products from '../../Products';

describe('Home', () => {
  const element = shallow(<Home/>);

  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('should include the `Categories` component', () => {
    expect(element.find(Categories)).toHaveLength(1);
  });

  it('should include the `Products` component', () => {
    expect(element.find(Products)).toHaveLength(1);
  });
});
