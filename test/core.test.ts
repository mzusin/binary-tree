import {
    inorderTraversalRecursive,
    inorderTraversalIterative,
    postorderTraversalIterative,
    postorderTraversalRecursive,
    postorderTraversalIterativeWith2Stacks,
    preorderTraversalRecursive,
    preorderTraversalIterative,
} from '../src/core';
import { ITreeNode } from '../src/interfaces';

describe('Core', () => {

    describe('inorderTraversalRecursive()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = inorderTraversalRecursive(root);
            expect(result).toEqual([]);
        });

        it('should return the correct inorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = inorderTraversalRecursive(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct inorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = inorderTraversalRecursive(root);
            expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]);
        });

        it('should return the correct inorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = inorderTraversalRecursive(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        it('should return the correct inorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = inorderTraversalRecursive(root);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('inorderTraversalIterative()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = inorderTraversalIterative(root);
            expect(result).toEqual([]);
        });

        it('should return the correct inorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = inorderTraversalIterative(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct inorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = inorderTraversalIterative(root);
            expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]);
        });

        it('should return the correct inorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = inorderTraversalIterative(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        it('should return the correct inorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = inorderTraversalIterative(root);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('postorderTraversalRecursive()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = postorderTraversalRecursive(root);
            expect(result).toEqual([]);
        });

        it('should return the correct postorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = postorderTraversalRecursive(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct postorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = postorderTraversalRecursive(root);
            expect(result).toEqual([2, 4, 3, 6, 8, 7, 5]);
        });

        it('should return the correct postorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = postorderTraversalRecursive(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        it('should return the correct postorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = postorderTraversalRecursive(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });
    });

    describe('postorderTraversalIterative()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = postorderTraversalIterative(root);
            expect(result).toEqual([]);
        });

        it('should return the correct postorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = postorderTraversalIterative(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct postorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = postorderTraversalIterative(root);
            expect(result).toEqual([2, 4, 3, 6, 8, 7, 5]);
        });

        it('should return the correct postorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = postorderTraversalIterative(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        it('should return the correct postorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = postorderTraversalIterative(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });
    });

    describe('postorderTraversalIterativeWith2StacksWith2Stacks()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = postorderTraversalIterativeWith2Stacks(root);
            expect(result).toEqual([]);
        });

        it('should return the correct postorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = postorderTraversalIterativeWith2Stacks(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct postorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = postorderTraversalIterativeWith2Stacks(root);
            expect(result).toEqual([2, 4, 3, 6, 8, 7, 5]);
        });

        it('should return the correct postorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = postorderTraversalIterativeWith2Stacks(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        it('should return the correct postorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = postorderTraversalIterativeWith2Stacks(root);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });
    });

    describe('preorderTraversalRecursive()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = preorderTraversalRecursive(root);
            expect(result).toEqual([]);
        });

        it('should return the correct preorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = preorderTraversalRecursive(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct preorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = preorderTraversalRecursive(root);
            expect(result).toEqual([5, 3, 2, 4, 7, 6, 8]);
        });

        it('should return the correct preorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = preorderTraversalRecursive(root);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it('should return the correct preorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = preorderTraversalRecursive(root);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('preorderTraversalIterative()', () => {
        it('should return an empty array for an empty tree', () => {
            const root: ITreeNode|undefined = undefined;
            const result = preorderTraversalIterative(root);
            expect(result).toEqual([]);
        });

        it('should return the correct preorder traversal for a single-node tree', () => {
            const root: ITreeNode = { val: 5 };
            const result = preorderTraversalIterative(root);
            expect(result).toEqual([5]);
        });

        it('should return the correct preorder traversal for a binary tree', () => {
            const root: ITreeNode = {
                val: 5,
                left: { val: 3, left: { val: 2 }, right: { val: 4 } },
                right: { val: 7, left: { val: 6 }, right: { val: 8 } },
            };
            const result = preorderTraversalIterative(root);
            expect(result).toEqual([5, 3, 2, 4, 7, 6, 8]);
        });

        it('should return the correct preorder traversal for a skewed left tree', () => {
            const root: ITreeNode = {
                val: 1,
                left: {
                    val: 2,
                    left: {
                        val: 3,
                        left: {
                            val: 4,
                            left: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = preorderTraversalIterative(root);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        it('should return the correct preorder traversal for a skewed right tree', () => {
            const root: ITreeNode = {
                val: 1,
                right: {
                    val: 2,
                    right: {
                        val: 3,
                        right: {
                            val: 4,
                            right: {
                                val: 5,
                            },
                        },
                    },
                },
            };
            const result = preorderTraversalIterative(root);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
    });
});