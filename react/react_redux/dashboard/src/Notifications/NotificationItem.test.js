import React from "react";
import { render, screen } from '@testing-library/react';
import NotificationItem from "./NotificationItem";
import userEvent from "@testing-library/user-event";

describe("Tests for the NotificationItem component", () => {
    test("verifies that the basic rendering of the component works without crashing", () => {
        render(<NotificationItem />)
    })

    test("verifies that by passing dummy type and value props, it renders the correct html", () => {
        render(<NotificationItem type="urgent" value="New Courses" />)
        expect(screen.getByText(/New COurses/i)).toBeInTheDocument();
    })

    test("verifies that by passing dummy html and value props, it renders the correct html", () => {
        render(<NotificationItem type="urgent" html={{__html: '<strong>Core Course</strong'}} />)
       expect(screen.getByText(/Core COurse/i)).toBeInTheDocument();
    });

})

describe("Tests for the user events on the NotificationItem", () => {
    test("for the markAsRead property", async () => {
        let mockMarkAsRead =  jest.fn();
        const user = userEvent.setup();
        render(<NotificationItem value='New Course' markAsRead={mockMarkAsRead} />)
        await user.click(screen.getByText('New Course'));
        expect(mockMarkAsRead).toHaveBeenCalled();
    })
    
})
