#!/usr/bin/node
import accessImmutableObject  from "./2-nested.js";

const obj = {
    name: {
        first: "Guillaume",
        last: "Salva"
    }
};

const array = ['name', 'first'];

console.log(accessImmutableObject(obj,array));
