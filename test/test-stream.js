var STREAM = require("../src/stream");
var Stream = STREAM.Stream;
var take = STREAM.take;
var map = STREAM.map;
var filter = STREAM.filter;

var STREAM2 = require("../src/stream-oo");
var Stream2 = STREAM2.Stream;

//无限长的自然数流
function* naturalNumbers() {
  let n = 1;

  while (true) {
    yield n++;
  }
}

const nats = naturalNumbers();

console.log(nats.next().value);
console.log(nats.next().value);
console.log(nats.next().value);
console.log(nats.next().value);

//--
console.log("---");

function* naturalNumbers2() {
  function* _naturalNumbers2(n) {
    yield n;
    yield* _naturalNumbers2(n + 1);
  }

  yield* _naturalNumbers2(1);
}

const nats2 = naturalNumbers2();

console.log(nats2.next().value);
console.log(nats2.next().value);
console.log(nats2.next().value);
console.log(nats2.next().value);

//--
console.log("---");

//stream style
function naturalNumbers3() {
  function _stream(n) {
    return {
      value: n,
      next() {
        return _stream(n + 1);
      }
    };
  }

  return () => _stream(1);
}

const nats3 = naturalNumbers3();
const one = nats3();
const two = one.next();
const three = two.next();

console.log(one.value);
console.log(two.value);
console.log(three.value);

//--
console.log("---");
console.log("take naturalNumbers3 ", take(3, naturalNumbers3()));

//--
console.log("---");
const nats4 = Stream(n => n + 1, 1);
const fibs = Stream(([current, next]) => [next, current + next], [0, 1]);
console.log("nats4 ", nats4, take(10, nats4));
console.log("fibs ", take(10, fibs));

//--
console.log("---");
const fibs2 = map(value => value[0], fibs);
console.log("fibs2 ", fibs2, take(10, fibs2));

//---
console.log("---");
const odds = filter(value => value % 2 == 1, nats4);
console.log("odds ", take(10, odds));

//---
console.log("---Stream OO");
var str2 = new Stream2(n => n + 1, 1);
console.log("str2Take ", str2().take(10));
var str3 = str2().map(n => n * 5);
console.log("str3Take ", str3().take(10));
var str4 = str2().filter(n => n % 5 == 3);
console.log("str4Take ", str4().take(10));