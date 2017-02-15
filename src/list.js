//cons cell
//每个节点都拥有自己的数据并指向另一个列表
var Cons = function (head, tail) {
  this.head = head;
  this.tail = tail;
};
Cons.prototype.isEmpty = false;

//nil
//空列表, 没有数据, 不指向另一个列表
//空列表只存在一个, 所以是个对象而不是构造函数
var Nil = {
  isEmpty: true,
  get head() {
    throw new Error("Accessing head on empty list.");
  },
  get tail() {
    throw new Error("Acessing tail on empty list.");
  }
};

/*
创建列表:
var list = new Cons(1, new Cons(2, new Cons(3, Nil)));
或简化成:
function cons(head, tail) {
  return new Cons(head, tail);
}
var list = cons(1, cons(2, cons(3, Nil)));
*/

//使用Cons构造一个列表
function cons(head, tail) {
  return new Cons(head, tail);
}

//map 方法将遍历 list, 对每个节点执行 fn, 然后构造并返回一个新 list, 保持了数据的不变性.
var map = function (list, fn) {
  if (list.isEmpty == true) {
    return Nil; //list
  }

  return cons(fn(list.head), map(list.tail, fn));
};

//object-oriented map
Cons.prototype.map = function (fn) {
  return cons(fn(this.head), this.tail.map(fn));
};
Nil.map = function () {
  return this;
};

//exports
module.exports = {
  Cons: Cons,
  Nil: Nil,
  cons: cons,
  map: map
};