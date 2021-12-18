import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test in <TodoListItem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should be display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be call delete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should be call toggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should be display text correctly', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`${1}. ${demoTodos[0].desc}`);
  });

  test('should be has complete class if todo is done', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
