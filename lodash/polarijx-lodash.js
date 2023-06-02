var polarijx = function () {
  function chunk(ary, size) {
    var result = []
    for (var i = 0; i <ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  }

  function compact(array) {
    var result = []
    for (var items of array) {
      if (items) {
        result.push(items)
      }
    }
    return result
  }

  function fill(array, value, [start = 0], [end = array.length]) {
    for (var i = 0; i <array.length; i ++) {
      array[i] = value
    }
    return array
  }

  return {
    chunk: chunk,
    compact: compact,
    fill: fill,
  }
}
