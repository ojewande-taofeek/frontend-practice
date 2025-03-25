#!/usr/bin/node
import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    if (object && Array.isArray(array)) {
        const map = Map(object);
        return (map.getIn(array));
    }
}
