# stream-diy


参考文章:
####node-stream 
- [什么是 Stream](https://zhuanlan.zhihu.com/p/24432941)
- [stream-handbook](https://github.com/substack/stream-handbook)([中文](https://github.com/jabez128/stream-handbook))

####fp-stream 
- [FP-Lists](http://blog.jeremyfairbank.com/javascript/functional-javascript-lists-1/) 
  - 递归和不变性 `Recursion and Immutability`
  - 把链表看成递归的数据结构, 一个节点包裹它后面的所有节点 `cons cells wrapping other cons cells until we get to the final empty list` <a href="http://blog.jeremyfairbank.com/images/functional-javascript-lists-1/functional-list.png" target="_blank"><img width="100" src="http://blog.jeremyfairbank.com/images/functional-javascript-lists-1/functional-list.png"></a>
- [FP-Streams](http://blog.jeremyfairbank.com/javascript/functional-javascript-streams-2/)
  - streams are lazy structures.
- [Stream.js](https://github.com/winterbe/streamjs)
  - Lazy Object Streaming Pipeline for JavaScript.
- [Scheme从List到Stream](http://blog.csdn.net/nklofy/article/details/45393643) 
  - 主要介绍流的一些名词 `cons-stream, 构造流` `stream-car, 取出头元素` `stream-cdr, 构造取出头元素后的流` `stream-ref, 取出第n个元素` `stream-map` `stream-reduce` `stream-filter` `delay` `force`
- [highland](https://github.com/caolan/highland)
  - High-level streams library for Node.js and the browser.
  
  
TODO:
1. 解决递归次数太多爆栈的问题. 
- However, please keep in mind that these are very basic implementations and are not optimized for performance. You will also run into issues if you try to iterate over very large lists. Because we depend on recursion, our call stack could grow very large and lead to the infamous stack overflow. One way around this is to utilize tail call optimization, a feature which is slated for ES6. (Essentially, if you tailor the last statement in your function correctly, you can ensure that recursive calls do not add to the call stack but instead just replace the current stack frame with a new one.)