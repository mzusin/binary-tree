import * as core from './core/core';
import * as bst from './core/binary-search-tree';
import * as cbt from './core/complete-binary-tree';

const api = {
    ...core,
    ...bst,
    ...cbt,
};

declare global {
    interface Window {
        mzBinaryTree: typeof api,
    }
}

window.mzBinaryTree = window.mzBinaryTree || api;

export * from './core/core';
export * from './core/binary-search-tree';
export * from './core/complete-binary-tree';