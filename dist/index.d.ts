module 'mz-binary-tree' {
    export interface ITreeNode {
        left?: ITreeNode;
        val: number;
        right?: ITreeNode;
    }

    export const inorderTraversalRecursive: (root?: ITreeNode) => number[];
    export const inorderTraversalIterative: (root?: ITreeNode) => number[];
    export const postorderTraversalRecursive: (root?: ITreeNode) => number[];
    export const postorderTraversalIterative: (root?: ITreeNode) => number[];
    export const postorderTraversalIterativeWith2Stacks: (root?: ITreeNode) => number[];
    export const preorderTraversalRecursive: (root?: ITreeNode) => number[];
    export const preorderTraversalIterative: (root?: ITreeNode) => number[];

    export const bfsWithQueue: (root?: ITreeNode) => number[];
    export const bfsWithLevel: (root?: ITreeNode) => number[];

    export const getCompleteBinaryTreeDepth: (root?: ITreeNode) => number;
    export const countCompleteBinaryTreeNodes: (root?: ITreeNode) => number;
}