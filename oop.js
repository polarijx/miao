//Mymap
class MyMap {
  #keys = []
  #vals = []
  constructor() {
    this.#keys = []
    this.#vals = []
  }
  set(key, val) {
    var keyIdx = this.#keys.indexOf(key)
    if (this.has(key)) {
      this.#vals[keyIdx] = val
    }
    else {
      this.#keys.push(key)
      this.#vals.push(val)
    }
    return this
  }
  get(key) {
    var keyIdx = this.#keys.indexOf(key)
    if (keyIdx >= 0) {
      return this.#vals[keyIdx]
    }
  }
  has(key) {
    if (this.#keys.includes(key)) {
      return true
    }
    else {
      return false
    }
  }
  delete(key) {
    var keyIdx = this.#keys.indexOf(key)
    if (keyIdx >= 0) {
      this.#keys.splice(keyIdx, 1)
      this.#vals.splice(keyIdx, 1)
      return true
    }
    return false
  }
  get size() {
    return this.#keys.length
  }
}
//MySet
class MySet {
  #elements = []
  constructor() {
    this.#elements = []
  }
  add(val) {
    if (!this.has(val)) {
      this.#elements.push(val)
    }
  }
  delete(val) {
    if (this.has(val)) {
      var idx = this.#elements.indexOf(val)
      this.#elements.splice(idx, 1)
    }
  }
  has(val) {
    return this.#elements.includes(val)
  }
  get size() {
    return this.#elements.length
  }
}
//Vector
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(v) {
    var x = this.x + v.x
    var y = this.y + v.y
    return new Vector(x, y)
  }
  minus(v) {
    var x = this.x - v.x
    var y = this.y - v.y
    return new Vector(x, y)
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
//Complex实现四个静态方法以计算加减乘除
class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }
  plus(otherC) {
    var real = this.real + otherC.imag
    var imag = this.imag + otherC.imag
    return new Complex(real, imag)
  }
  minus(otherC) {
    var real = this.real - otherC.real
    var imag = this.imag - otherC.imag
    return new Complex(real, imag)
  }
  mul(otherC) {
    var real = this.real * otherC.real - this.imag * otherC.imag
    var imag = this.real * otherC.imag + this.imag * otherC.real
    return new Complex(real, imag)
  }
  div(otherC) {
    if (otherC.imag === 0 && otherC.real === 0) {
      return new Complex(Infinity, Infinity);
    }
    var denominator = otherC.real * otherC.real + otherC.imag * otherC.imag;
    var real = (this.real * otherC.real + this.imag * otherC.imag) / denominator;
    var imag = (this.imag * otherC.real - this.real * otherC.imag) / denominator;
    return new Complex(real, imag);

  }
}
//Stack
class Stack {
  constructor() {
    this.head = null
    this.nodeCount = 0
  }
  push(val) {
    var node = {
      val: val,
      next: null
    }
    this.nodeCount++
    if (this.head === null) {
      this.head = node
    }
    else {
      node.next = this.head
      this.head = node
    }
  }
  pop() {
    if (this.head === null) {
      return undefined
    }
    this.nodeCount--
    var result = this.head.val
    this.head = this.head.next
    return result
  }
  get size() {
    return this.nodeCount
  }
}
//Queue
class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.nodeCount = 0
  }
  add(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
    }
    this.tail.next = node
    this.tail = node
    this.nodeCount++
  }
  pop() {
    if (this.head == null) {
      return
    }
    this.nodeCount--
    if (this.head == this.tail) {
      var result = this.head.val
      this.head = this.tail = null
      return result
    }
    var result = this.head.val
    this.head = this.head.next
    return result
  }
  get size() {
    return this.nodeCount
  }
}
//LinkedList 实现前后增删以及at以及length
class LinkedList {
  constructor(...initVals) {
    this.head = null
    this.tail = null
    for (var item of initVals) {
      this.append(item)
    }
  }
  append(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
      return
    }
    else {
      this.tail.next = node
      this.tail = node
      return
    }
  }
  prepend(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
      return
    }
    else {
      node.next = this.head
      this.head = node
      return
    }
  }
  at(idx) {
    var p = this.head
    var count = 0
    while (count < idx) {
      p = p.next
      count++
    }
    return p.val
  }
  get size() {
    var p = this.head
    var l = 0
    while (p) {
      l++
      p = p.next
    }
    return l
  }
}

class PriorityQueue {
  constructor(initials = [], predicate = it => it) {
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function, got: ' + predicate)
    }
    this._elements = []
    this._predicate = predicate

    for (var item of initials) {
      this.push(item)
    }
  }
  _swap(i, j) {
    var t = this._elements[i]
    this._elements[i] = this._elements[j]
    this._elements[j] = t
  }
  _heapUp(pos) {
    if (pos == 0) {
      return
    }
    var predicate = this._predicate
    var parentPos = (pos - 1) >> 1
    if (predicate(this._elements[pos]) > predicate(this._elements[parentPos])) {
      this._swap(pos, parentPos)
      this._heapUp(parentPos)
    }
  }
  _heapDown(pos) {
    var leftPos = 2 * pos + 1
    var rightPos = 2 * pos + 2
    var maxIdx = pos
    var predicate = this._predicate
    if (leftPos < this._elements.length && predicate(this._elements[leftPos]) > predicate(this._elements[maxIdx])) {
      maxIdx = leftPos
    }
    if (rightPos < this._elements.length && predicate(this._elements[rightPos]) > predicate(this._elements[maxIdx])) {
      maxIdx = rightPos
    }
    if (maxIdx !== pos) {
      this._swap(maxIdx, pos)
      this._heapDown(maxIdx)
    }
  }
  push(val) {
    this._elements.push(val)
    this._heapUp(this._elements.length - 1)
    return this
  }
  pop() {
    if (this._elements.length == 0) {
      return undefined
    }
    if (this._elements.length == 1) {
      return this._elements.pop()
    }
    var result = this._elements[0]
    var last = this._elements.pop()
    this._elements[0] = last
    this._heapDown(0)
    return result
  }
  peek() {
    return this._elements[0]
  }
  get size() {
    return this._elements.length
  }
}




String.prototype.mymatch = function(regex) {
  var matches = []
  var match
  regex.lastIndex = 0
  if (regex.global) {
    while (match = regex.exec(this)) {
      matches.push(match[0])
    }
    return matches
  }
  else {
    return regex.exec(this)
  }
}

String.prototype.mysearch = function (target) {
  if (typeof target === 'string') {
    return this.indexOf(target)
  }
  else if (target instanceof RegExp) {
    target.lastIndex = 0
    var match = target.exec(this)
    if (!target.global) {
      if (match) {
        return match.index
      }
      else {
        return -1
      }
    }
    else {
      return this.indexOf(match[0])
    }
  }
}

RegExp.prototype.mytest = function (str) {
  if (this.exec(str)) {
    return true
  }
  else {
    return false
  }
}

String.prototype.mysplit = function(regex) {
  var result = []
  if (typeof regex === 'string') {
    var start = 0
    var match = this.indexOf(regex)
    while (match !== -1) {

      var substring = this.substring(start, match)
      result.push(substring)
      start = match + regex.length
      match = this.indexOf(regex, start) //从start位置开始查找
    }
    if (start < this.length) {
      var lastSubstring = this.substring(start)
      result.push(lastSubstring)
    }
    return result
  }
  else {
    if (!regex.global) {
      regex = new RegExp(regex.source, 'g' + regex.flags)
    }
    regex.lastIndex = 0
    var match
    var lastLastIndex = 0
    while (match = regex.exec(this)) {
      result.push(this.slice(lastLastIndex, match.index))
      result.push(...match.slice(1))
      lastLastIndex = regex.lastIndex
    }
    result.push(this.slice(lastLastIndex))
    return result
  }
}

String.prototype.myreplace = function (regexp, replacer) {
  regexp.lastIndex = 0
  var result = ''
  var match
  var lastLastIndex = 0
  while (match = regexp.exec(this)) {
    result += this.slice(lastLastIndex, match.index)
    if (typeof replacer == 'function') {
      result += replacer(...match, match.index, match.input)
    } else {
      var replacement = replacer.myreplace(/\$([1-9\&])/g, (_, idx) => {
        if (idx == '&') {
          return match[0]
        } else {
          return match[idx]
        }
      })
      result += replacement
    }
    lastLastIndex = regexp.lastIndex
    if (!regexp.global) {
      lastLastIndex = match.index + match[0].length
      break
    }
  }
  result += this.slice(lastLastIndex)
  return result
}

String.prototype.myreplaceAll = function (regex, replacer) {
  if (!regex.global) {
    throw new TypeError('xxx')
  }
  return this.myreplace(regex, replacer)
}



  function parseValue(str) {
    var i = 0
    var char = str [i]
    if (char === '{') {
      return parseIbject
    }
    if (char === '[') {
      return parseArrat()
    }
    if (char === '"') {
      return parseString()
    }
    if (char === 't') { //遇到true
      var token = str.slice(i, i + 4)
      if (token ==='true') {
        i += 4
        return true
      }
      else {
        throw new Error('error')
      }
    }
    if (char === 'f') { // 遇到了false
      var token = str.slice(i, i + 5)
      if (token === 'false') {
        i += 5
        return false
      }
      else {
        throw new Error('error')
      }
    }
    if (char === 'null') {
      var token = str.slice(i, i + 4)
      if (token = 'null') {
        i += 4
        return true
      }
      else {
        throw new Error('error')
      }
    }
    return parseNumber() //简单情况下，不是上面几种就是数字了
  }

  function parseNumber() {
    var start = i
    while (str[i] >= '0' && str[i] <= '9') {
      i ++
    }
    return Number(str.slice(start, i))
  }

  function parseString() {
    i ++
    var start = i
    while (str[i] !== '"') {
      i++
    }
    var end = i
    i++ //此时i应指向结束"，跳过
    return str.slice(start, end)
  }
  function parseArray() {
    var result = []
    i++ // 跳过[
    if (str[i] == ']') {
      i++
      return result
    }

    while (true) {
      var value = parseValue()
      result.push(value)
      if (str[i] === ',') {
        i++
        continue // 在数组内以','为分割，解析value并跳过',''
      }
      if (str[i] === ']') {
        i++
        break
      }
    }
    return result
  }

  function parseObject() {
    var result = {}
    i++
    if (str[i] === '}') {
      i++
      return result
    }

    while (true) {
      var name = parseString() // 对象的属性名
      i++ // 跳过':'
      var value = parseValue() // 对象的属性值
      result[name] = value
      if (str[i] === ',') {
        i++
        continue
      }
      if (str[i] === '}') {
        i++
        break
      }
    }
    return result
  }

