import React from 'react';
import App from './App';
import { render, screen, act, waitFor } from '@testing-library/react';

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
