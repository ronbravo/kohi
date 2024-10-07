import { expect, specs } from '@/common/index.js';

specs ({
  'sample spec 1': {
    // 'before all': () => {},
    // 'before each': () => {},
    // 'after all': () => {},
    // 'after each': () => {},
    'sample spec 1/1': () => {
      expect (1).is (1)
    },
    'sample spec 1/2': async () => {
      expect (1).isNot (2)
    },
    'sample spec 1/3': {
      'sample spec 1/3/1': {
        'sample spec 1/3/1/1': () => {},
        'sample spec 1/3/1/2': {},
      }
    },
  },
  'sample spec 2': async () => {},
  'sample spec 3': () => {},
});
