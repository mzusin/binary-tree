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
declare const bfsWithLevel: (root?: ITreeNode) => number[];
```