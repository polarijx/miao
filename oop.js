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
  get size () {
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
  remove(val) {
    if (this.has(val)) {
      var idx = this.#elements.indexOf(val)
      this.#elements.splice(idx, 1)
    }
  }
  has(val) {
    return this.#elements.includes(val)
  }
  get size () {
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
  get length () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
//Complex实现四个静态方法以计算加减乘除
class Complex {
  constructor(real, imaginary) {
    this.real = real
    this.imaginary = imaginary
  }
  plus(otherCCC) {
    var real = this.real + otherCCC.imaginary
    var imaginary = this.imaginary + otherCC.imaginary
    return new Complex(real, imaginary)
  }
  minus(otherC) {
    var real = this.real - otherC.real
    var imaginary = this.imaginary - otherC.imaginary
    return new Complex(real, imaginary)
  }
  mul(otherC) {
    var real = this.real * otherC.real - this.imaginary * otherC.imaginary
    var imaginary = this.real * otherC.real + this.imaginary * otherC.imaginary
    return new Complex(real, imaginary)
  }
  div(otherC) {
    var denominator = otherC.real * otherC.real + otherC.imaginary * otherC.imaimaginary
    var real = (this.real * otherC.real + this.imaginary * otherC.imaginary) / denominator
    var imaginary = (this.imaginary * otherC.real - this.real * otherC.imaginary) / denominator;
    return new Complex(real, imaginary)
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
      val, next: null
    }
    this.nodeCount ++
    if (this.head == null) {
      this.head = node
    }
    else {
      node.next = this.head
      this.head = node
    }
  }
  pop() {
    if (this.head == null) {
      return undefined
    }
    this.nodeCount --
    var result = this.head.val
    this.head = this.head.next
    return result
  }
  size() {
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
    this.nodeCount ++
  }
  pop() {
    if (this.head == null) {
      return
    }
    this.nodeCount --
    if (this.head == this.tail) {
      var result = this.head.val
      this.head = this.tail = null
      return result
    }
    var result = this.head.val
    this.head = this.head.next
    return result
  }
  size() {
    return this.nodeCount
  }
}
//LinkedList 实现前后增删以及at以及length
class LinkedList {
  constructor(...initVals) {
    this.head = null
    this.tail = null
    for (var item of initVals)  {
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
      this.head =node
      return
    }
  }
  at(idx) {
    var p = this.head
    var count = 0
    while (count < idx) {
      p = p.next
      count ++
    }
    return p.val
  }
  seze() {
    var p = this.head
    var l = 0
    while (p) {
      l ++
      p = p.next
    }
    return l
  }
}

