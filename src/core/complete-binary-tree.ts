/**
 * Full binary tree - all the level of binary tree is completely filled.
 * The number of nodes in full binary tree is 2^h - 1;
 * Complete binary tree - all the level of binary tree is completely filled except possibly the last level, which is filled from left side.
 */

import { ITreeNode } from '../interfaces';

export const getCompleteBinaryTreeDepth = (root?: ITreeNode) : number => {
    if(!root) return 0;
    return 1 + getCompleteBinaryTreeDepth(root.left);
};

/**
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 * Finding depth is O(log(N)), and in the worse case we do this for every depth.
 * The worse case total run time is (log(N)²).
 */
export const countCompleteBinaryTreeNodes = (root?: ITreeNode) : number => {
    if(!root) return 0;

    const leftDepth = getCompleteBinaryTreeDepth(root.left);
    const rightDepth = getCompleteBinaryTreeDepth(root.right);

    if(leftDepth === rightDepth) {
        return (2 ** leftDepth) + countCompleteBinaryTreeNodes(root.right);
    }
    else{
        return (2 ** rightDepth) + countCompleteBinaryTreeNodes(root.left);
    }
};
