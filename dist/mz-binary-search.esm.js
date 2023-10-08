/*
https://github.com/mzusin/binary-search
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var n=s=>{let t=[],r=e=>{e&&(r(e.left),t.push(e.val),r(e.right))};return r(s),t},o=s=>{if(!s)return[];let t=[],r=[],e=s;for(;e||r.length>0;){for(;e;)r.push(e),e=e.left;e=r.pop(),e&&(t.push(e.val),e=e.right)}return t},u=s=>{if(!s)return[];let t=[s],r=[];for(;t.length;){let e=t.pop();if(!e)return r;e.left&&t.push(e.left),e.right&&t.push(e.right),r.unshift(e.val)}return r},i=s=>{let t=[],r=e=>{e&&(r(e.left),r(e.right),t.push(e.val))};return r(s),t},l=s=>{if(!s)return[];let t=[],r=[s];for(;r.length>0;){let e=r.pop();if(!e)return t;t.push(e.val),e.right&&r.push(e.right),e.left&&r.push(e.left)}return t},p=s=>{let t=[],r=e=>{e&&(t.push(e.val),r(e.left),r(e.right))};return r(s),t};export{o as inorderTraversalIterative,n as inorderTraversalRecursive,u as postorderTraversalIterative,i as postorderTraversalRecursive,p as preorderTraversal,l as preorderTraversalIterative};
