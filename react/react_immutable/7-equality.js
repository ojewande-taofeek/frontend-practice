#!/usr/bin/node
import { Map, is } from 'immutable';

export function areMapsEqual(map1, map2) {
    if (Map.isMap(map1) && Map.isMap(map2)) {
        return is(map1, map2);
    }
};

const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

console.log(areMapsEqual(map1, map2));
