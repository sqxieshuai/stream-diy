var STREAM = require("../src/stream");
var Stream = STREAM.Stream;
var take = STREAM.take;
var map = STREAM.map;
var filter = STREAM.filter;

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
console.log("nats4 ", take(10, nats4));
console.log("fibs ", take(10, fibs));

//--
console.log("---");
const fibs2 = map(value => value[0], fibs);
console.log("fibs2 ", take(10, fibs2));

//---
console.log("---");
const odds = filter(value => value % 2 == 1, nats4);
console.log("odds ", take(10, odds));
