export function debounce<T>(fn: (...args: T[]) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return function(...args: T[]) {
    clearTimeout(timer);
    // @ts-expect-error this is not typed
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
