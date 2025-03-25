import React from 'react';
import App from './App';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JSDOMEnvironment from 'jest-environment-jsdom';

describe("Tests for the App.js", () => {
    test("renders the App component without crashing", async () => {
        await act(async () => {
            render(<App />)
        });
    });

    test("verifies that App renders a div with the class App-header", async () => {
        await act(async () => {
            render(<App />)
        });
        expect(screen.getByRole('heading', {name: /School dashboard/i, level: 1})).toBeInTheDocument();
    });

    test("verifies that App renders a div with the class App-body", async () => {
        await act(async () => {
            render(<App isLoggedIn={false} />)
        })
       expect(screen.getByRole('textbox', {name: /Email/i})).toBeInTheDocument();
    });

    test("verifies that App renders a div with the class App-footer", async () => {
        await act(async () => {
            render(<App />)
        })
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    test("check that CourseList is not displayed", async () => {
        await act(async () => {
            render(<App isLoggedIn={false} />);
        })
        const rows = screen.queryAllByRole('row');
        expect(rows.length).toBe(0);
    });
});

describe("when isLoggedIn is true", () => {
    test("verify that the Login component is not included", async () => {
        render(<App isLoggedIn={true} />)
        await waitFor(() => {
           expect(screen.queryByText(/login/i)).not.toBeInTheDocument(); 
        })
    })

    test("verify that the CourseList component is included", async () => {
        render(<App isLoggedIn={true} />)
        await waitFor(() => {
           expect(screen.getByRole('table')).toBeInTheDocument(); 
        })
    })
})

describe("Test for user interaction of the App", () => {
    let originalAlert;

    beforeAll(() => {
        originalAlert = window.alert;
        window.alert = jest.fn();
    })

    afterAll(() => {
        window.alert = originalAlert;
    })

    test("verify that when the keys control and h are pressed the logOut function is called", async () => {
        const user = userEvent.setup();
        const mockLogout = jest.fn();
        render(<App logOut={mockLogout} />)
        await user.keyboard('{Control>}h{/Control}')
        expect(window.alert).toHaveBeenCalledWith('Logging you out');
        expect(mockLogout).toHaveBeenCalled();
    });
});
