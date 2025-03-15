
import { boxplot, bench, summary, group } from 'mitata';


function forCacheLen(array: number[]) {
  let result = 0;
  for (let i = 0, len = array.length; i < len; ++i) {
    result += array[i];    
  }
  return result;
}

function forNoCacheLen(array: number[]) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];    
  }
  return result;
}

group('src/cond.ts', () => {
  boxplot(() => {
    summary(() => {
      const array = Array.from({ length: 1e8 }, (_, i) => i);
      bench('forCacheLen', () => {
        forCacheLen(array);
      })
        .gc('inner');
      
      bench('forNoCacheLen', () => {
        forNoCacheLen(array);
      })
        .gc('inner');
    });
  });
});
