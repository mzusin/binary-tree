/**
 * https://cs.stackexchange.com/questions/32397/is-there-a-difference-between-perfect-full-and-complete-tree
 * Perfect binary tree - all the level of binary tree is completely filled.
 * Full binary tree - every node has 0 or 2 children.
 * The number of nodes in perfect binary tree is  (2 ** (height + 1)) - 1;
 * Complete binary tree - all the level of binary tree is completely filled except possibly the last level, which is filled from left side.
 */

import { ITreeNode } from '../interfaces';

export const getCompleteBinaryTreeDepth = (root?: ITreeNode) : number => {
    if(!root) return 0;
    return 1 + getCompleteBinaryTreeDepth(root.left);
};

const getLeftTreeDepth = (root?: ITreeNode) : number => {
    if(!root) return 0;
    return 1 + getLeftTreeDepth(root.left);
};

const getRightTreeDepth = (root?: ITreeNode) : number => {
    if(!root) return 0;
    return 1 + getRightTreeDepth(root.right);
};

/**
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 * Finding depth is O(log(N)), and in the worse case we do this for every depth.
 * The worse case total run time is (log(N)²).
 *
 * How it works?
 * -------------
 * The idea to find nested perfect binary trees (PBT).
 * If we found PBT, we can calculate the number of its nodes with the formula (2 ** h - 1).
 */
export const countCompleteBinaryTreeNodes = (root?: ITreeNode) : number => {
    if(!root) return 0;

    const leftDepth = getLeftTreeDepth(root.left);
    const rightDepth = getRightTreeDepth(root.right);

    if(leftDepth === rightDepth) {
        return (2 ** (leftDepth + 1)) - 1;
    }

    return countCompleteBinaryTreeNodes(root.left) + countCompleteBinaryTreeNodes(root.right) + 1;
};
