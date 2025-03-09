import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

describe("Tests for the App.js", () => {
    test("renders the App component without crashing", () => {
        render(<App />);
    });

    test("verifies that App renders a div with the class App-header", () => {
        render(<App />);
        expect(screen.getByRole('heading', {name: /School dashboard/i, level: 1})).toBeInTheDocument();
    });

    test("verifies that App renders a div with the class App-body", () => {
        render(<App />)
       expect(screen.getByRole('textbox', {name: /Email/i})).toBeInTheDocument();
    });

    test("verifies that App renders a div with the class App-footer", () => {
        render(<App />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
});
