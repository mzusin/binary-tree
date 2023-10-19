/*
https://github.com/mzusin/binary-search
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var l=Math.pow;var d=t=>{let r=[],n=e=>{e&&(n(e.left),r.push(e.val),n(e.right))};return n(t),r},a=t=>{if(!t)return[];let r=[],n=[],e=t;for(;e||n.length>0;){for(;e;)n.push(e),e=e.left;e=n.pop(),r.push(e.val),e=e.right}return r},T=t=>{let r=[],n=e=>{e&&(n(e.left),n(e.right),r.push(e.val))};return n(t),r},I=t=>{if(!t)return[];let r=[],n=[t],e=[];for(;n.length>0;){let s=n.pop();e.push(s),s!=null&&s.left&&n.push(s.left),s!=null&&s.right&&n.push(s.right)}for(;e.length>0;){let s=e.pop();r.push(s.val)}return r},m=t=>{if(!t)return[];let r=[t],n=[];for(;r.length>0;){let e=r.pop();e.left&&r.push(e.left),e.right&&r.push(e.right),n.unshift(e.val)}return n},N=t=>{let r=[],n=e=>{e&&(r.push(e.val),n(e.left),n(e.right))};return n(t),r},g=t=>{if(!t)return[];let r=[],n=[t];for(;n.length>0;){let e=n.pop();r.push(e.val),e.right&&n.push(e.right),e.left&&n.push(e.left)}return r},v=t=>{if(!t)return[];let r=[t],n=[];for(;r.length>0;){let e=r.shift();n.push(e.val),e.left&&r.push(e.left),e.right&&r.push(e.right)}return n},b=t=>{if(!t)return[];let r=[t],n=[],e=0;for(;r.length>0;){let s=r.length;for(;s>0;){let o=r.shift();n.push(o.val),o.left&&r.push(o.left),o.right&&r.push(o.right),s--}console.log(e),e++}return n},f=t=>{if(!t)return 0;let r=f(t.left),n=f(t.right);return 1+Math.max(r,n)};var w=t=>{if(!t||t.length<=0)return;let r=(n,e)=>{if(n>e)return;let s=Math.floor((e+n)/2);return{left:r(n,s-1),val:t[s],right:r(s+1,e)}};return r(0,t.length-1)},k=t=>{if(!t||t.length<=0)return;let r=Math.floor(t.length/2),n={val:t[r]},e=[[n,0,r-1],[n,r+1,t.length-1]];for(;e.length>0;){let[s,o,i]=e.shift();if(o>i)break;r=Math.floor((o+i)/2);let u={val:t[r]};u.val<=s.val?s.left=u:s.right=u,e.push([u,o,r-1]),e.push([u,r+1,i])}return n};var h=t=>t?1+h(t.left):0,c=t=>{if(!t)return 0;let r=h(t.left),n=h(t.right);return r===n?l(2,r)+c(t.right):l(2,n)+c(t.left)};export{b as bfsWithLevel,v as bfsWithQueue,k as convertSortedArrayToBalancedBSTIterative,w as convertSortedArrayToBalancedBSTRecursive,c as countCompleteBinaryTreeNodes,h as getCompleteBinaryTreeDepth,f as getDepth,a as inorderTraversalIterative,d as inorderTraversalRecursive,m as postorderTraversalIterative,I as postorderTraversalIterativeWith2Stacks,T as postorderTraversalRecursive,g as preorderTraversalIterative,N as preorderTraversalRecursive};
