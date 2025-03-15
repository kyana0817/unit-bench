import { bench, group } from 'mitata';


function fibonacci(n: number): number {
  if (n<=1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

group('src/example.ts', () => {
  bench('fibonacci(40)', () => {
    fibonacci(40);
  });
});

