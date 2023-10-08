import * as core from './core';

const api = {
    ...core,
};

declare global {
    interface Window {
        mzBinaryTree: typeof api,
    }
}

window.mzBinaryTree = window.mzBinaryTree || api;

export * from './core';