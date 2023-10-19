import { ITreeNode } from '../interfaces';

/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 * Time Complexity: O(N)
 * Auxiliary Space: O(H) ~= O(log(N)), for recursive stack space where H is the height of the tree.
 */
export const convertSortedArrayToBalancedBSTRecursive = (arr: number[]) : ITreeNode | undefined => {
    if(!arr || arr.length <= 0) return undefined;

    // 1. find the middle element of the array
    // 2. make it the root of the tree
    // 3. perform the same operation on the left subarray for the root’s left child
    // 4. perform the same operation on the right subarray for the root’s right child
    // 5. repeat recursively

    const helper = (start: number, end: number) : ITreeNode | undefined => {
        if(start > end) return undefined;

        const mid = Math.floor((end + start) / 2);

        return {
            left: helper(start, mid - 1),
            val: arr[mid],
            right: helper(mid + 1, end),
        };
    };

    return helper(0, arr.length - 1);
};

/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 * Time Complexity: O(N), where N is the number of elements in array.
 * Auxiliary Space: O(N)
 */
export const convertSortedArrayToBalancedBSTIterative = (arr: number[]) : ITreeNode | undefined => {
    if(!arr || arr.length <= 0) return undefined;

    let mid = Math.floor((arr.length) /2);
    const root: ITreeNode = {
        val: arr[mid],
    };

    const queue: [ITreeNode, number, number][] = [
        [root, 0, mid - 1],
        [root, mid + 1, arr.length - 1],
    ];

    while(queue.length > 0) {

        const [parent, start, end] = queue.shift() as [ITreeNode, number, number];

        if(start > end) break;

        mid = Math.floor((start + end) /2);
        const node: ITreeNode = {
            val: arr[mid],
        };

        if(node.val <= parent.val) {
            parent.left = node;
        }
        else{
            parent.right = node;
        }

        queue.push([node, start, mid - 1]);
        queue.push([node, mid + 1, end]);
    }

    return root;
};