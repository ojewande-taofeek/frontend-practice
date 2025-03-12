import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe("Tests for the CourseList component", () => {
    const listCourses = [
            {id: 0, name: 'ES6', credit: 60},
            {id: 1, name: 'Webpack', credit: 20},
            {id: 2, name: 'React', credit: 40},
        ];
    test("renders CourseList component without crashing", () => {
        render(<CourseList />);
    });

    test("renders the 5 different rows", () => {
        render(<CourseList listCourses={listCourses} />);
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(5);
    });
})