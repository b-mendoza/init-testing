import { renderHook, act } from '@testing-library/react';

import { useCounter } from './';

test('should increment', () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
