import { defaultCompareFunction } from '../../src/core/compare';

describe('compare', () => {
	test('default', () => {
		expect(defaultCompareFunction(0, 1)).toEqual(-1);
		expect(defaultCompareFunction(0, 0)).toEqual(0);
		expect(defaultCompareFunction(1, 0)).toEqual(1);
	});
});
