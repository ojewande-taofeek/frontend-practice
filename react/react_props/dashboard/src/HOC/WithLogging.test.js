import React from 'react';
import { screen, render } from '@testing-library/react';
import Login from '../Login/Login';
import WithLogging from './WithLogging';

describe("Tests for WithLogging", () => {
    test("Test for a pure html", () => {
        render(WithLogging(Login))
        screen.debug();
    })
})