import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe("Tests for the utils.js", () => {
    test("returns the present year", () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toBe(year);
    });

    test("returns 'ALX'", () => {
        expect(getFooterCopy(true)).toBe('ALX');
    });

    test("returns 'ALX main dashboard'", () => {
        expect(getFooterCopy(false)).toBe('ALX main dashboard');
    });

    test("returns html string", () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
