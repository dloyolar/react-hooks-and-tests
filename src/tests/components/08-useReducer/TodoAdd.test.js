import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Test in <TodoAdd />', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('should be display corectly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not be call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).not.toHaveBeenCalled();
  });

  test('should be call handleAddTodo', () => {
    const value = 'Aprender React';

    wrapper
      .find('input')
      .simulate('change', { target: { value, name: 'description' } });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
