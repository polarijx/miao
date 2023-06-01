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

class PriorityQueue2 {
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

