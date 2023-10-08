import {
    binarySearchRecursive,
} from '../src/core';

describe('Core', () => {

    describe('binarySearchRecursive()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursive(nums, 3)).toEqual(2);
            expect(binarySearchRecursive(nums, 6)).toEqual(5);
        });
    });

});