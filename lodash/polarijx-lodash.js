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
    for (var i = start; i < end; i ++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, n=1) {
    return  array.slice(n)
  },

  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    if (
      typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' && !Array.isArray(predicate)
    ) {
      throw new Error('Invalid predicate type.');
    }
    for (var i = fromIndex; i >= 0; i -- ) {
      if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] === predicate[1]) {
          return i
        }
      }
      if (typeof predicate === 'function' ) {
        if (predicate(array[i], i, array))
        return i
      }
      if(typeof predicate === 'object') {
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
        if (array[i].hasOwnProperty(predicate)) {
          return i
        }
      }
      else {
        return -1
      }
    }
  },

  fromIndex: function (array, predicate, fromIndex = 0) {
    if (
      typeof predicate !== 'function' && typeof predicate !== 'object' && typeof predicate !== 'string' && !Array.isArray(predicate)
    ) {
      throw new Error('Invalid predicate type.');
    }
    for (var i = fromIndex; i < array.length; i ++ ) {
      if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] === predicate[1]) {
          return i
        }
      }
      if (typeof predicate === 'function' ) {
        if (predicate(array[i], i, array))
        return i
      }
      if(typeof predicate === 'object') {
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
        if (array[i].hasOwnProperty(predicate)) {
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
        return result.concat(flattenDepth(item, depth - 1))
      }
      return result.concat(item)
    }, [])
  }
}
