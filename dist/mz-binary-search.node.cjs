/*
https://github.com/mzusin/binary-search
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var u=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var p=(s,r)=>{for(var t in r)u(s,t,{get:r[t],enumerable:!0})},a=(s,r,t,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of i(r))!l.call(s,n)&&n!==t&&u(s,n,{get:()=>r[n],enumerable:!(e=o(r,n))||e.enumerable});return s};var h=s=>a(u({},"__esModule",{value:!0}),s);var d={};p(d,{inorderTraversalIterative:()=>c,inorderTraversalRecursive:()=>f,postorderTraversalIterative:()=>v,postorderTraversalRecursive:()=>T,preorderTraversal:()=>I,preorderTraversalIterative:()=>m});module.exports=h(d);var f=s=>{let r=[],t=e=>{e&&(t(e.left),r.push(e.val),t(e.right))};return t(s),r},c=s=>{if(!s)return[];let r=[],t=[],e=s;for(;e||t.length>0;){for(;e;)t.push(e),e=e.left;e=t.pop(),e&&(r.push(e.val),e=e.right)}return r},v=s=>{if(!s)return[];let r=[s],t=[];for(;r.length;){let e=r.pop();e.left&&r.push(e.left),e.right&&r.push(e.right),t.unshift(e.val)}return t},T=s=>{let r=[];function t(e){e&&(t(e.left),t(e.right),r.push(e.val))}return t(s),r},m=s=>{if(!s)return[];let r=[],t=[s];for(;t.length>0;){let e=t.pop();r.push(e.val),e.right&&t.push(e.right),e.left&&t.push(e.left)}return r},I=s=>{let r=[];function t(e){e&&(r.push(e.val),t(e.left),t(e.right))}return t(s),r};0&&(module.exports={inorderTraversalIterative,inorderTraversalRecursive,postorderTraversalIterative,postorderTraversalRecursive,preorderTraversal,preorderTraversalIterative});
