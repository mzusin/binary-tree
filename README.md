# Binary Tree

```ts
interface ITreeNode {
    left?: ITreeNode;
    val: number;
    right?: ITreeNode;
}

const inorderTraversalRecursive: (root: ITreeNode) => number[];
const inorderTraversalIterative: (root: ITreeNode) => number[];
const postorderTraversalIterative: (root: ITreeNode) => number[];
const postorderTraversalRecursive: (root: ITreeNode) => number[];
const preorderTraversalIterative: (root: ITreeNode) => number[];
const preorderTraversal: (root: ITreeNode) => number[];
```