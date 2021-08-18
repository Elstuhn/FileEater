//Only works in ECMAScript 2017+
const fs = require('fs');

var getClassOf = Function.prototype.call.bind(Object.prototype.toString);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Storage {
  constructor(name, description = None) {
    this.name = name; //name of storage
    this.description = description; //description of storage
    this.raw = {}; // key(name): object
  }
  
  details() {
    console.log(`Name: ${name}\nDescription: ${description}`);
  }
  
  prettyshow() { 
    for (const [key, value] of Object.entries(this.raw)) {
      console.log(`${key}:\n${value}`);
      sleep(800);
    }
  }
  
  raw() {
    return this.raw;
  }
  
  length() {
    var count = 0;
    for (const [key, value] of Object.entries(this.raw)) {
      count++;
    }
    return count;
  }
  
  add(key, object) {
    this.raw[key] = object;
  }
  
  addObjs(iterable) { // iterates through the iterable and asks you for the key for each object
    var key;
    for (const obj of iterable) {;
      key = prompt("What is the name of the key of this object?");
      this.raw[key] = obj;
    }
  }
  
  batchAdd(iterable) { // Only accepts arrays/sets or dictionary
    type_ = getClassOf(iterable);
    if (type_ == getClassOf(new Array()) || type_ == getClassOf(new Set())) {
      var key;
      var value;
      var length = iterable.length;
      var extral = length/2;
      var extra = 0;
      if (extral.toString.includes('.')) { //checks if length is a decimal (length can only be x.5 where x is a number)
        length = length-1; //makes it so length is an even number
        extra = iterable[-1];
      }
      var count;
      for (var i = 0; i<length; i += 2) {
        key = iterable[i];
        value = iterable[i+1];
        this.raw[key] = value;
      }
    } else if (type_ == getClassOf(new Object)) { //object is assumed to be a dictionary
      var keys = Object.keys(iterable);
      for (var key of keys) {
        this.raw[key] = iterable[key];
      }
    }
  }
}

