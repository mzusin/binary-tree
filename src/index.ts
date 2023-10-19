import * as core from './core';
import * as bst from './bst';
import * as complete from './complete-binary-tree';

const api = {
    ...core,
    ...bst,
    ...complete,
};

declare global {
    interface Window {
        mzBinaryTree: typeof api,
    }
}

window.mzBinaryTree = window.mzBinaryTree || api;

export * from './core';
export * from './bst';
export * from './complete-binary-tree';