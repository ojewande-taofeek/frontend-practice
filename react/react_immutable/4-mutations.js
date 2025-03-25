#!/usr/bin/node

import { Map } from 'immutable';

export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

export const map2 = map.merge(
    {2: 'Benjamin', 4: 'Oliver'}
);

// console.log(map2._root.entries);
console.log(map2.toObject());