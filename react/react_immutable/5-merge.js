#!/usr/bin/node
import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
    if (Array.isArray(page1) && Array.isArray(page2)) {
        return List(page1).concat(page2)
    }
};

export function mergeElements(page1, page2) {
    const list1 = Map(page1);
    const list2 = Map(page2);
    if (list1.equals(list2)) {
        return (list2)
    } else {
        return List(list1.merge(list2));
    }
}

/*
Examples

const page1 = [1, 2, 3];
const page2 = [4, 5];
console.log(concatElements(page1, page2));

const page3 = {
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
};

const page4 = {
    2: 'Benjamin', 4: 'Oliver'
}
console.log(mergeElements(page3, page4).toJS());
*/
