import {
    convertSortedArrayToBalancedBSTRecursive,
    convertSortedArrayToBalancedBSTIterative,
} from '../src/bst';
import { ITreeNode } from '../src/interfaces';

describe('Binary Search Tree', () => {

    describe('convertSortedArrayToBalancedBSTRecursive()', () => {
        it('should return undefined for an empty array', () => {
            const result = convertSortedArrayToBalancedBSTRecursive([]);
            expect(result).toBeUndefined();
        });

        it('should return a valid balanced BST for a sorted array', () => {
            const arr = [1, 2, 3, 4, 5, 6, 7];
            const result = convertSortedArrayToBalancedBSTRecursive(arr);

            // Define a helper function to check if a binary tree is balanced.
            const isBalanced = (node: ITreeNode | undefined): number => {
                if (!node) return 0;

                const leftHeight = isBalanced(node.left);
                const rightHeight = isBalanced(node.right);

                if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                    return -1; // Indicates an unbalanced tree
                }

                return Math.max(leftHeight, rightHeight) + 1;
            };

            // Check if the resulting tree is balanced (height difference <= 1).
            expect(isBalanced(result)).toBeGreaterThanOrEqual(0);
        });

        it('should handle a larger sorted array', () => {
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const result = convertSortedArrayToBalancedBSTRecursive(arr);

            // Define a helper function to check if a binary tree is balanced.
            const isBalanced = (node: ITreeNode | undefined): number => {
                if (!node) return 0;

                const leftHeight = isBalanced(node.left);
                const rightHeight = isBalanced(node.right);

                if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                    return -1; // Indicates an unbalanced tree
                }

                return Math.max(leftHeight, rightHeight) + 1;
            };

            // Check if the resulting tree is balanced (height difference <= 1).
            expect(isBalanced(result)).toBeGreaterThanOrEqual(0);
        });
    });

    describe('convertSortedArrayToBalancedBSTIterative()', () => {
        it('should return undefined for an empty array', () => {
            const result = convertSortedArrayToBalancedBSTIterative([]);
            expect(result).toBeUndefined();
        });

        it('should return a valid balanced BST for a sorted array', () => {
            const arr = [1, 2, 3, 4, 5, 6, 7];
            const result = convertSortedArrayToBalancedBSTIterative(arr);

            // Define a helper function to check if a binary tree is balanced.
            const isBalanced = (node: ITreeNode | undefined): number => {
                if (!node) return 0;

                const leftHeight = isBalanced(node.left);
                const rightHeight = isBalanced(node.right);

                if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                    return -1; // Indicates an unbalanced tree
                }

                return Math.max(leftHeight, rightHeight) + 1;
            };

            // Check if the resulting tree is balanced (height difference <= 1).
            expect(isBalanced(result)).toBeGreaterThanOrEqual(0);
        });

        it('should handle a larger sorted array', () => {
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const result = convertSortedArrayToBalancedBSTIterative(arr);

            // Define a helper function to check if a binary tree is balanced.
            const isBalanced = (node: ITreeNode | undefined): number => {
                if (!node) return 0;

                const leftHeight = isBalanced(node.left);
                const rightHeight = isBalanced(node.right);

                if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                    return -1; // Indicates an unbalanced tree
                }

                return Math.max(leftHeight, rightHeight) + 1;
            };

            // Check if the resulting tree is balanced (height difference <= 1).
            expect(isBalanced(result)).toBeGreaterThanOrEqual(0);
        });
    });
});