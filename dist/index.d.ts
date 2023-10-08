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
    export const preorderTraversalRecursive: (root?: ITreeNode) => number[];
    export const preorderTraversalIterative: (root?: ITreeNode) => number[];
}