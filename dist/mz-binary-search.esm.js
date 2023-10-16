/*
https://github.com/mzusin/binary-search
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var u=s=>{let t=[],r=e=>{e&&(r(e.left),t.push(e.val),r(e.right))};return r(s),t},i=s=>{if(!s)return[];let t=[],r=[],e=s;for(;e||r.length>0;){for(;e;)r.push(e),e=e.left;e=r.pop(),e&&(t.push(e.val),e=e.right)}return t},h=s=>{let t=[],r=e=>{e&&(r(e.left),r(e.right),t.push(e.val))};return r(s),t},l=s=>{if(!s)return[];let t=[],r=[s],e=[];for(;r.length>0;){let n=r.pop();e.push(n),n!=null&&n.left&&r.push(n.left),n!=null&&n.right&&r.push(n.right)}for(;e.length>0;){let n=e.pop();t.push(n.val)}return t},p=s=>{if(!s)return[];let t=[s],r=[];for(;t.length;){let e=t.pop();e.left&&t.push(e.left),e.right&&t.push(e.right),r.unshift(e.val)}return r},a=s=>{let t=[],r=e=>{e&&(t.push(e.val),r(e.left),r(e.right))};return r(s),t},c=s=>{if(!s)return[];let t=[],r=[s];for(;r.length>0;){let e=r.pop();t.push(e.val),e.right&&r.push(e.right),e.left&&r.push(e.left)}return t},f=s=>{if(!s)return[];let t=[s],r=[];for(;t.length>0;){let e=t.shift();r.push(e.val),e.left&&t.push(e.left),e.right&&t.push(e.right)}return r},T=s=>{if(!s)return[];let t=[s],r=[],e=0;for(;t.length>0;){let n=t.length;for(;n>0;){let o=t.shift();r.push(o.val),o.left&&t.push(o.left),o.right&&t.push(o.right),n--}e++}return r};export{T as bfsWithLevel,f as bfsWithQueue,i as inorderTraversalIterative,u as inorderTraversalRecursive,p as postorderTraversalIterative,l as postorderTraversalIterativeWith2Stacks,h as postorderTraversalRecursive,c as preorderTraversalIterative,a as preorderTraversalRecursive};
