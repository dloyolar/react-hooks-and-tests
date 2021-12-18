import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('test in <HookApp />', () => {
  test('should be display <HookApp /> correctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
