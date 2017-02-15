var LIST = require("../src/list");
var cons = LIST.cons;
var map = LIST.map;
var Nil = LIST.Nil;

var list = cons(1, cons(2, cons(3, Nil)));
var newList = map(list, function (head) {
  console.log("list head ", head);
  return head * 2;
});
map(newList, function (head) {
  console.log("newList head ", head);
});

//object-oriented map
var ooNewList = list.map(function (head) {
  console.log("oo list head ", head);
  return head * 2;
});
ooNewList.map(function (head) {
  console.log("pp newList head ", head);
  return head;
});