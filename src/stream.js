
function Stream(fn, initial) {
  function _Stream(value) {
    return {
      value: value,
      next() {
        return _Stream(fn(value));
      }
    };
  }

  return () => _Stream(initial);
}

//获取 stream 的前 n 个值
function take(n, str) {
  function _take(n, str, result) {
    if (n == 0) {
      return result;
    }

    const {value, next} = str();

    return _take(n - 1, next, result.concat(value));
  }

  return _take(n, str, []);
}

//遍历 stream
//map 不会消耗原有的 stream, map 新建一个 stream 并返回
function map(fn, str) {
  function _Stream(str) {
    const {value, next} = str();

    return {
      value: fn(value),
      next() {
        return _Stream(next);
      }
    };
  }

  return () => _Stream(str);
}

//filter 筛选 stream 的元素
function filter(fn, str) {
  function _Stream(str) {
    const {value, next} = str();

    if (fn(value)) {
      return {
        value: value,
        next() {
          return _Stream(next);
        }
      }
    }

    return _Stream(next);
  }

  return () => _Stream(str);
}

module.exports = {
  Stream: Stream,
  take: take,
  map: map,
  filter: filter
};