#!/usr/bin/node
import { Seq, Map } from 'immutable';

export function printBestStudents(object) {
    console.log(
      Seq(object)
                .filter((obj) => obj.score >= 70)
                .map((obj) => Map(obj).mergeDeep({
                  firstName: obj.firstName[0].toUpperCase() + obj.firstName.slice(1),
                  lastName: obj.lastName[0].toUpperCase() + obj.lastName.slice(1)
                })).
                toJS()
);
}
/*
Example

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },

  2: {
    score: 70,
    firstName: 'paul',
    lastName: 'umar',
  }
};

printBestStudents(grades);
*/
