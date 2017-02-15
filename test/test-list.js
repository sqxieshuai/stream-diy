var LIST = require("../src/list");
var Nil = LIST.Nil;
var cons = LIST.cons;
var map = LIST.map;
var reduce = LIST.reduce;

var list = cons(1, cons(2, cons(3, Nil)));
var newList = map(list, function (head) {
  console.log("list head ", head);
  return head * 2;
});

//test map
map(newList, function (head) {
  console.log("newList head ", head);
});

//test object-oriented map
var ooNewList = list.map(function (head) {
  console.log("oo list head ", head);
  return head * 2;
});
ooNewList.map(function (head) {
  console.log("pp newList head ", head);
  return head;
});

//test reduce
var reduceResult = reduce(list, function (x, y) {
  return x + y;
}, 0);
console.log("reduceResult ", reduceResult);
var ooReduceResult = list.reduce(function (x, y) {
  return x + y;
}, 0);
console.log("ooReduceResult ", ooReduceResult);