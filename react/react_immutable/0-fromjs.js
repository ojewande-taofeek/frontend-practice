#!/usr/bin/node

import { fromJS } from 'immutable';
const getImmutableObject = (object) => fromJS(object);

// Example
const obj = {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}

console.log(getImmutableObject(obj));
const map = getImmutableObject(obj);
console.log(map.get('smell'));
