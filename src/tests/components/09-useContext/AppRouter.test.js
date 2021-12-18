import React from 'react';

import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in <AppRouter />', () => {
  const user = {
    id: 1,
    name: 'Diego',
  };
  const wrapper = mount(
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('should be display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
