import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('test in <LoginScreen/>', () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should be display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be execute setUser with args', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({ id: 1234, name: 'Diego' });
  });
});
