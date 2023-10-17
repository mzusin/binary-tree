import * as core from './core';
import * as bst from './bst';

const api = {
    ...core,
    ...bst,
};

declare global {
    interface Window {
        mzBinaryTree: typeof api,
    }
}

window.mzBinaryTree = window.mzBinaryTree || api;

export * from './core';
export * from './bst';