export function debounce<T>(fn: (...args: T[]) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return function (...args: T[]) {
    clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
