var LIST = require("../src/list");
var Nil = LIST.Nil;
var cons = LIST.cons;
var map = LIST.map;
var reduce = LIST.reduce;
var List = LIST.List;

var list = cons(1, cons(3, cons(5, Nil)));
var newList = map(list, function (head) {
  console.log("list head ", head);
  return head * 2;
});
console.log("==========");
//test map
map(newList, function (head) {
  console.log("newList head ", head);
});

//test object-oriented map
console.log("--list ");
var ooNewList = list.map(function (head) {
  console.log("list map head ", head);
  return head * 2;
});
console.log("--ooNewList ", ooNewList);

//test reduce
console.log("-=-=-=-=-");
var reduceResult = reduce(list, function (x, y) {
  console.log(" left right ", x, y);
  return x + "" + y;
});
console.log("reduceResult ", reduceResult);
var ooReduceResult = list.reduce(function (x, y) {
  console.log(" left right ", x, y);
  return x + "" + y;
});
console.log("ooReduceResult ", ooReduceResult);
var ooReduceRightResult = list.reduceRight(function (right, left) {
  console.log(" right left ", right, left);
  return right + "" + left;
});
console.log("ooReduceRightResult ", ooReduceRightResult);

//List
console.log("------------");
var list1 = List(1, 3, 5, 7, 9, 11);
list1.map(function (head) {
  console.log("list1 head ", head);
});
console.log("list1 ", list1);
