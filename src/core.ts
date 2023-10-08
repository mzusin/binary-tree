import { ITreeNode } from './interfaces';

/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Left, center, right
 */
export const inorderTraversalRecursive = (root: ITreeNode): number[]  => {
  const res: number[] = [];

  const traverse = (node? : ITreeNode) => {
    if(!node) return;

    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  return res;
};

/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Left, center, right
 */
export const inorderTraversalIterative = (root: ITreeNode): number[] => {

  if(!root) return [];

  const res: number[] = [];
  const stack: ITreeNode[] = [];
  let node: ITreeNode|undefined = root;

  while(node || stack.length > 0){

    while(node){
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if(node) {
      res.push(node.val);
      node = node.right;
    }
  }

  return res;
};

/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * Left, right, center
 */
export const postorderTraversalIterative = (root: ITreeNode): number[] => {
  if(!root) return [];

  const stack: ITreeNode[] = [root];
  const res: number[] = [];

  while(stack.length){
    const curr = stack.pop();
    if(!curr) return res;

    if(curr.left) stack.push(curr.left)
    if(curr.right) stack.push(curr.right)

    res.unshift(curr.val);
  }

  return res;
};

/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * Left, right, center
 */
export const postorderTraversalRecursive = (root: ITreeNode): number[] => {
  const res: number[] = [];

  const traverse = (node?: ITreeNode) => {
    if(!node) return;

    traverse(node.left);
    traverse(node.right);
    res.push(node.val);
  }

  traverse(root);

  return res;
};

/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Center, left, right
 */
export const preorderTraversalIterative = (root: ITreeNode): number[] => {

  if(!root) return [];

  const res: number[] = [];

  const stack: ITreeNode[] = [root];

  while(stack.length > 0){
    const node = stack.pop();
    if(!node) return res;

    res.push(node.val);

    if(node.right){
      stack.push(node.right);
    }

    if(node.left){
      stack.push(node.left);
    }
  }

  return res;
};

/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * Center, left, right
 */
export const preorderTraversal = (root: ITreeNode): number[] => {
  const res: number[] = [];

  const traverse = (node?: ITreeNode) => {
    if(!node) return;

    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return res;
};