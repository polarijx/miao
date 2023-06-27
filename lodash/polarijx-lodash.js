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

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, n = 1) {
    return array.slice(n)
  },

  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    if (
      typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' && !Array.isArray(predicate)
    ) {
      throw new Error('Invalid predicate type.')
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] === predicate[1]) {
          return i
        }
      }
      if (typeof predicate === 'function') {
        if (predicate(array[i], i, array))
          return i
      }
      if (typeof predicate === 'object') {
        var keys = Object.keys(predicate)
        var match = true
        for (var key of keys) {
          if (predicate[key] !== array[i][key]) {
            match = false
            break
          }
        }
        if (match) {
          return i
        }
      }
      if (typeof predicate === 'string') {
        if (predicate in array[i] && array[i][predicate]) {
          return i
        }
      }
    }
    return -1
  },

  findIndex: function (array, predicate, fromIndex = 0) {
    if (
      typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' && !Array.isArray(predicate)
    ) {
      throw new Error('Invalid predicate type.')
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] === predicate[1]) {
          return i
        }
      }
      if (typeof predicate === 'function') {
        if (predicate(array[i], i, array))
          return i
      }
      if (typeof predicate === 'object') {
        var keys = Object.keys(predicate);
        var match = true;
        for (var key of keys) {
          if (predicate[key] !== array[i][key]) {
            match = false;
            break;
          }
        }
        if (match) {
          return i;
        }
      }
      if (typeof predicate === 'string') {
        if (predicate in array[i] && array[i][predicate]) {
          return i
        }
      }
    }
    return -1
  },

  flatten: function (array) {
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        for (var val of item) {
          result.push(val)
        }
      }
      else {
        result.push(item)
      }
    }
    return result
  },

  flattenDeep: function (array) {
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        var flattedItem = this.flattenDeep(item)
        for (var val of flattedItem) {
          result.push(val)
        }
      }
      else {
        result.push(item)
      }
    }
    return result
  },

  flattenDepth: function (array, depth = 1) {
    if (depth === 0) {
      return array
    }
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        return result.concat(this.flattenDepth(item, depth - 1))
      }
      return result.concat(item)
    }, [])
  },

  fromPairs: function (pairs) {
    var result = {}
    for (var i = 0; i < pairs.length; i++) {
      var [key, value] = pairs[i]
      result[key] = value
    }
    return result
  },

  toPairs: function (object) {
    if (object instanceof Map || object instanceof Set) {
      return Array.from(object.entries())
    }
    return Object.entries(object)
  },

  head: function (array) {
    return array[0]
  },

  indexof: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },

  initial: function (array) {
    return array.slice(0, array.length - 1)
  },

  join: function (array, separator=',') {
    var result = ''
    for (var val of array) {
      result += val + separator
    }
    return result.slice(0, result.length - 1)
  },

  last: function (array) {
    return array[array.length - 1]
  },

  pull: function (array, ...values) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (values.includes(array[i])) {
        array.splice(i, 1)
      }
    }
    return array
  },

  reverse: function (array) {
    var i = 0
    var j = array.length - 1
    while (i < j) {
      var tem = array[i]
      array[i] = array[j]
      array[j] = tem
      i++
      j--
    }
    return array
  }
}
