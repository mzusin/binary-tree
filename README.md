# Binary Tree

```ts
interface ITreeNode {
    left?: ITreeNode;
    val: number;
    right?: ITreeNode;
}

const inorderTraversalRecursive: (root: ITreeNode) => number[];
const inorderTraversalIterative: (root: ITreeNode) => number[];

const postorderTraversalRecursive: (root: ITreeNode) => number[];
const postorderTraversalIterative: (root: ITreeNode) => number[];
const postorderTraversalIterativeWith2Stacks: (root?: ITreeNode) => number[];

const preorderTraversalRecursive: (root: ITreeNode) => number[];
const preorderTraversalIterative: (root: ITreeNode) => number[];

const bfsWithQueue: (root?: ITreeNode) => number[];
const bfsWithLevel: (root?: ITreeNode) => number[];

const convertSortedArrayToBalancedBSTRecursive: (arr: number[]) => ITreeNode | undefined;
const convertSortedArrayToBalancedBSTIterative: (arr: number[]) => ITreeNode | undefined;

const getCompleteBinaryTreeDepth: (root?: ITreeNode) => number;
const countCompleteBinaryTreeNodes: (root?: ITreeNode) => number;

export declare const symmetricTraversal: (root?: ITreeNode) => number[][];
```