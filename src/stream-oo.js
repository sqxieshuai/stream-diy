function _Stream(fn, value) {
  this.value = value;
  this.next = () => new _Stream(fn, fn(value));
}

_Stream.prototype.map = function (fn) {
  var self = this;

  function __Stream() {
    this.value = fn(self.value);
    this.next = self.next().map(fn);
  }
  __Stream.prototype = _Stream.prototype;

  return () => new __Stream();
};

_Stream.prototype.filter = function (fn) {
  var self = this;
  function __Stream() {
    var nextStr = self.next().filter(fn);
    if (fn(self.value)) {
      this.value = self.value;
      this.next = nextStr;
    } else {
      const {value, next} = nextStr();
      this.value = value;
      this.next = next;
    }
  }
  __Stream.prototype = _Stream.prototype;

  return () => new __Stream();
};

_Stream.prototype.take = function (n) {
  var self = this;

  function _take(n, result) {
    if (n == 0) {
      return result;
    }

    return [self.value].concat(self.next().take(n - 1));
  }

  return _take(n, []);
};

function Stream(fn, initial) {
  return () => new _Stream(fn, initial);
}

module.exports = {
  Stream: Stream
};