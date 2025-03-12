import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe("Tests for the CourseListRow component", () => {
    test("check to test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        render(<CourseListRow isHeader={true} textFirstCell={'Course Name'} />);
        expect(screen.getByRole('columnheader', {name: /Course*/i})).toBeInTheDocument();
    });

    test("check to test the component renders two cells when textSecondCell is present", () => {
        render(<CourseListRow isHeader={true} textFirstCell={'Course Code'} textSecondCell={'Credit'}/>);
        expect(screen.getByRole('columnheader', {name: /Course*/i})).toBeInTheDocument();
        expect(screen.getByRole('columnheader', {name: /Credit/i})).toBeInTheDocument();
    });

    test("check to test the component renders two cells when textSecondCell is present", () => {
        render(<CourseListRow textFirstCell={'Course Code'} textSecondCell={'Credit'}/>);
        expect(screen.getByText(/Course/)).toBeInTheDocument();
        expect(screen.getByText(/Credit/)).toBeInTheDocument();
    });
})