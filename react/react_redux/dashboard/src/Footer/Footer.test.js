import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Tests the Footer component', () => {
    test('renders the Footer component to verify it renders without crashing', () => {
        render(<Footer />)
    })

    test('verifies that the components at the very least render the text “Copyright”', () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright*/i)).toBeInTheDocument();
    })
})