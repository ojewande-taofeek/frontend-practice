import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
})

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
})
