import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in <HomeScreen />', () => {
  const user = {
    name: 'Diego',
    email: 'dieegolr@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('should be display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
