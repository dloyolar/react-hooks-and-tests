import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('test in todoReducer', () => {
  test('should be return the state by default', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should be add a new TODO', () => {
    const newTodo = { id: 3, desc: 'Aprender React Native', done: false };
    const action = {
      type: 'add',
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('should be delete one TODO', () => {
    const action = {
      type: 'delete',
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual(
      demoTodos.filter((todo) => todo.id !== action.payload)
    );
  });

  test('should be Toggle done', () => {
    const action = {
      type: 'toggle',
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state).toEqual(
      demoTodos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    );
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
