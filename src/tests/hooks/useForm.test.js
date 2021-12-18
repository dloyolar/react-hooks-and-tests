import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test in useForm', () => {
  const initialForm = {
    name: 'Diego',
    email: 'dieegolr@gmail.com',
  };

  test('should be return a form by default', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current[0]).toEqual(initialForm);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');
  });

  test('should be change form value (name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Loyola',
        },
      });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual({ ...initialForm, name: 'Loyola' });
  });

  test('should be reset form with the function', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Loyola',
        },
      });

      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
