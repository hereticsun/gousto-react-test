import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../Home';
import Categories from '../../Categories';

describe('Home', () => {
  const element = shallow(<Home/>);

  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('should include the `Categories` component', () => {
    expect(element.find(Categories)).toHaveLength(1);
  });
});