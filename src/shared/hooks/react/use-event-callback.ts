import { useEffect, useMemo, useRef } from 'react';

type Fn<ARGS extends any[], R> = (...args: ARGS) => R;

export function useEventCallback<A extends any[], R>(fn: Fn<A, R>): Fn<A, R> {
  const ref = useRef<Fn<A, R>>(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useMemo(
    () => (...args: A): R => {
      const { current } = ref;
      return current(...args);
    },
    [],
  );
}
