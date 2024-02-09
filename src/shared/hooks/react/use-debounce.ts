import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * @brief Хук useDebounce создает функцию с задержкой (debounce), чтобы ограничить частоту вызова функции обратного вызова.
 *
 * @param {(...args: any[]) => void} callback - Функция обратного вызова, которую нужно вызывать с задержкой.
 * @param {number} delay - Время задержки в миллисекундах между последовательными вызовами callback.
 *
 * @returns {(...args: any[]) => void} Новая функция обратного вызова, обернутая в механизм "debounce".
 *
 * @description
 * Хук `useDebounce` создает функцию с задержкой (debounce), чтобы избежать частых вызовов функции при быстром
 * изменении данных или событий.
 * Функция `callback`, переданная в качестве первого параметра, будет вызвана только после завершения задержки (`delay`)
 * времени после последнего вызова функции с задержкой.
 *
 */

export function useDebounce<T>(callback: (...args: T[]) => Promise<void> | void, delay: number) {
  const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  return useCallback(
    (...args: T[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
