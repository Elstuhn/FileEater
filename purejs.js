//Only works in ECMAScript 2017+
const prompt = require('prompt')
const fs = require('fs')

var getClassOf = Function.prototype.call.bind(Object.prototype.toString);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Storage {
  constructor(name, description = None) {
    this.name = name
    this.description = description
    this.raw = {} // key(name): object
  }
  
  details() {
    console.log(`Name: ${name}\nDescription: ${description}`)
  }
  
  prettyshow() { 
    for (const [key, value] of Object.entries(this.raw)) {
      console.log(`${key}:\n${value}`)
      sleep(800)
    }
  }
  
  raw() {
    return this.raw
  }
  
  length() {
    int count = 0
    for (const [key, value] of Object.entries(this.raw)) {
      count++
    }
    return count
  }
  
  add(key, object) {
    this.raw[key] = object
  }
  
  addObjs(iterable) { // iterates through the iterable and asks you for the key for each object
    var key;
    for (const obj of iterable) {
      key = prompt("What is the name of the key of this object?")
      this.raw[key] = obj
    }
  }
  
  batchAdd(iterable) { // Only accepts arrays/sets or dictionary
    type_ = getClassOf(iterable)
    int switch = 0
    if (type_ == getClassOf(new Array()) || type_ == getClassOf(new Set())) {
      var key
      var value
      for (var i of iterable) {
        if (!switch) {
          key = i
        } else {
          value = i
        }
      }
    } else if {
    }
  }
}

