import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Tests the Login component', () => {
    test('renders the Login component to verify it renders without crashing', () => {
        render(<Login />)
    })

    test('verifies that the components renders 2 input tags', () => {
        render(<Login />)
       const email = screen.getAllByPlaceholderText(/example*/i);
       const password = screen.getAllByPlaceholderText(/yourpassword/i);
       expect(email.length + password.length).toBe(2);
    })

    test('verifies that the components renders 2 label tags', () => {
        render(<Login />)
       const email = screen.getAllByLabelText(/Email/i);
       const password = screen.getAllByLabelText(/Password/i);
       expect(email.length + password.length).toBe(2);
    })
})