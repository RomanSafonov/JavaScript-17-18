'use strict';
var dog = {
  name:'Jack', 
  age:5
}; 
var str = JSON.stringify(dog); 
localeStorage.setItem('pet',str);
