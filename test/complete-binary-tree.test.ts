import {
    countCompleteBinaryTreeNodes,
    getCompleteBinaryTreeDepth,
} from '../src/complete-binary-tree';
import { ITreeNode } from '../src/interfaces';

describe('Complete Binary Tree', () => {

    describe('getCompleteBinaryTreeDepth', () => {
        it('should return 0 for an empty tree', () => {
            expect(getCompleteBinaryTreeDepth()).toBe(0);
        });

        it('should return the depth of a tree with one node', () => {
            const root = {
                val: 1
            };
            expect(getCompleteBinaryTreeDepth(root)).toBe(1);
        });

        it('should return the correct depth for a complete binary tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 4,
                    },
                    right: {
                        val: 5,
                    }
                },
                right: {
                    val: 3,
                    left: {
                        val: 6,
                    },
                    right: {
                        val: 7,
                    }
                }
            };

            expect(getCompleteBinaryTreeDepth(root)).toBe(3);
        });
    });

    describe('countCompleteBinaryTreeNodes()', () => {
        it('should return 0 for an empty tree', () => {
            expect(countCompleteBinaryTreeNodes()).toBe(0);
        });

        it('should return the correct count for a complete binary tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 4,
                    },
                    right: {
                        val: 5,
                    }
                },
                right: {
                    val: 3,
                    left: {
                        val: 6,
                    },
                    right: {
                        val: 7,
                    }
                }
            };

            // The tree in this test case is a complete binary tree with 7 nodes.
            expect(countCompleteBinaryTreeNodes(root)).toBe(7);
        });
    });

});