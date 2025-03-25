import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Tests for the Header component', () => {
    test('renders the Header component to verify it renders without crashing', () => {
        render(<Header />)
    })

    test('verifies that the components render img', () => {
        render(<Header />)
        expect(screen.getByRole('img', {name: /ALX-Logo/i})).toBeInTheDocument();
    })

    test('verifies that the components render h1', () => {
        render(<Header />)
        expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
    })
})
