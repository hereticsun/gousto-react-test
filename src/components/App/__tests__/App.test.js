import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  const element = shallow(<App/>);

  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('should contain one top level heading', () => {
    expect(element.find('h1')).toHaveLength(1);
  });
});