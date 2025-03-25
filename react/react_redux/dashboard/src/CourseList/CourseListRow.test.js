import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe("Tests for the CourseListRow component", () => {
    test("check to test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        render(
            <table>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell={'Course Name'} />
                </thead>
            </table>
            );
        expect(screen.getByRole('columnheader', {name: /Course*/i})).toBeInTheDocument();
    });

    test("check to test the component renders two cells when textSecondCell is present", () => {
        render(
            <table>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell={'Course Code'} textSecondCell={'Credit'}/>    
                </thead>
            </table>
            );
        expect(screen.getByRole('columnheader', {name: /Course*/i})).toBeInTheDocument();
        expect(screen.getByRole('columnheader', {name: /Credit/i})).toBeInTheDocument();
    });

    test("check to test the component renders two cells when textSecondCell is present", () => {
        render(
        <table>
            <tbody>
                <CourseListRow textFirstCell={'Course Code'} textSecondCell={'Credit'}/>
            </tbody>
            </table>
        );
        expect(screen.getByText(/Course/)).toBeInTheDocument();
        expect(screen.getByText(/Credit/)).toBeInTheDocument();
    });
})
