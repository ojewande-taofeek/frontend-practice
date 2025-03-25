import React from 'react';
import { screen, render } from '@testing-library/react';
import BodySection from './BodySection';

describe("Tests for BodySection component", () => {
    beforeEach(() => {
        render(<BodySection title='test title'>
            <p>test children node</p>
        </BodySection>)
    });
    test("There is one h2 element and it includes the text test title", () => {
        
        expect(screen.getByRole('heading', {level: 2})).toBe(1);
        expect(screen.getByText('test title')).toBeInTheDocument();
    })

    test("There is one p element and it includes the text test children node" , () => {
        expect((screen.getByRole('paragraph')).length).toBe(1);
        expect(screen.getByText('test children node')).toBeInTheDocument();
    })
})