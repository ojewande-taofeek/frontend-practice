#!/usr/bin/node

import { List } from 'immutable';

export function getListObject(array) {
    if (Array.isArray(array)) {
        return List(array);
    }
}

export function addElementToList(list, element) {
    if (List.isList(list))
        return list.push(element);
}

