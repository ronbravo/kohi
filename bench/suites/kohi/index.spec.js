import { expect, run, specs } from 'kohi';
import  math from '../../math.js';

specs ({
	'some group spec': {
		// 'before all': () => {},
		// 'before each': () => {},
		// 'after all': () => {},
		// 'after each': () => {},
		'some sample spec 1': () => {
			expect (1).is (1)
		},
		'some sample spec 2': async () => {
			expect (1).isNot (2)
		},
		'some sample spec 3': {
			'some child sample spec 3.1': {
				'some sample spec': () => {},
			}
		},
	},
	'some sample spec 2': async () => {},
	'some sample spec 3': () => {},
})

run()

/*
describe('sum', () => {
  it('should be a function', () => {
    assert.equal(typeof math.sum, 'function');
  });

	it('should compute result correctly', () => {
		assert.equal(math.sum(1, 2), 3);
		assert.equal(math.sum(-1, -2), -3);
		assert.equal(math.sum(-1, 1), 0);
	});
});

describe('div', () => {
	it('should be a function', () => {
		assert.equal(typeof math.div, 'function');
	});

	it('should compute result correctly', () => {
		assert.equal(math.div(1, 2), 0.5);
		assert.equal(math.div(-1, -2), 0.5);
		assert.equal(math.div(-1, 1), -1);
	});
});

describe('mod', () => {
	it('should be a function', () => {
		assert.equal(typeof math.mod, 'function');
	});

	it('should compute result correctly', () => {
		assert.equal(math.mod(1, 2), 1);
		assert.equal(math.mod(-3, -2), -1);
		assert.equal(math.mod(7, 4), 3);
	});
});
*/
