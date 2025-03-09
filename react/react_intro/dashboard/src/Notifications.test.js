import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";
import '@testing-library/jest-dom';

describe("Tests for the Notifications.js", () => {
    test("that Notifications renders without crashing", () => {
        render(<Notifications />);
    });

    test("verifies that Notifications renders three list items", () => {
        render(<Notifications />);
        const allList = screen.getAllByRole('listitem');
        expect(allList.length).toBe(3);
    });

    test("verify that Notifications renders the text 'Here is the list of notifications'", () => {
        render(<Notifications />);
        expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    });
})
