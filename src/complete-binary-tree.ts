import { ITreeNode } from './interfaces';

export const getCompleteBinaryTreeDepth = (root?: ITreeNode) : number => {
    if(!root) return 0;
    return 1 + getCompleteBinaryTreeDepth(root.left);
};

/**
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
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
