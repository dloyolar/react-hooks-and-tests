import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Test in useFetch', () => {
  test('should be return default data', () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should be have data, loading false and error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );
    await waitForNextUpdate({ timeout: 5000 });

    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('should be handle error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apid/users?page=2')
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la data');
  });
});
