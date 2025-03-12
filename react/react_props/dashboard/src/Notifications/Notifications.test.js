import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Tests for the Notifications.js", () => {
    const listNotifications = [
        {id: 0, type: 'default', value: 'New course available' },
        {id: 1, type: 'urgent' , value:'New resume available' },
        {id: 2, type: 'urgent', html: {__html: getLatestNotification()}}
    ];

    beforeEach( () => {
        render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    })

    test("that Notifications renders without crashing", () => {
    });

    test("verifies that Notifications renders three list items", () => {
        const allList = screen.getAllByRole('listitem');
        expect(allList.length).toBe(3);
    });

    test("verify that Notifications renders the text 'Here is the list of notifications'", () => {
        expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    });

    test("that the component renders NotificationItem elements", () => {
        const list = screen.getAllByRole('strong');
        expect(list.length).toBe(1);
    });

    test("verifies that the first NotificationItem element renders the right html", () => {
        expect(screen.getByText(/New course available/i)).toBeInTheDocument();
    });

    

    test("check that the menu item is being displayed when displayDrawer is true", () => {
        expect(screen.getByText(/Your*/i)).toBeInTheDocument();
    });

    test("check that the div.Notifications is being displayed when displayDrawer is true", () => {
        expect(screen.queryByText(/New Course/i)).toBeInTheDocument();
    });

    

})

describe("Tests for Notifications component when displayDrawer is false", () => {
    beforeEach(() => {
        render(<Notifications  displayDrawer={false} />)
    });

    test("check that the menu item is being displayed when displayDrawer is false", () => {
        expect(screen.getByText(/Your/i)).toBeInTheDocument();
        
    });

    test("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
        expect(screen.queryByText(/New Course/i)).not.toBeInTheDocument();
    });

})


describe("Tests for Notifications  when displayDrawer is true but listNotifications is empty", () => {
    beforeEach(() => {
        render(<Notifications displayDrawer={true} listNotifications={[]}/>)
    });
    test(" renders correctly when listNotifications property is not passed", () => {
        expect(screen.getByText('No new notification for now')).toBeInTheDocument();
        expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    })

}
)