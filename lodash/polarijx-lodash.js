var polarijx = {
  chunk: function (ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },

  compact: function (array) {
    var result = []
    for (var items of array) {
      if (items) {
        result.push(items)
      }
    }
    return result
  },

  fill: function (array, value, [start = 0], [end = array.length]) {
    for (var i = start; i < end; i ++) {
      array[i] = value
    }
    return array
  },
}
