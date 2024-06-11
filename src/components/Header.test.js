import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";

describe('Header component tests', () => {
    test('Header render test', () => {
        const headerComponent = render(<Header/>);
        const expectedTag = 'H3';
        const headerText = headerComponent.getByText('Header');
        const headerTagTextTag = headerText.tagName;
        expect(headerText).toBeTruthy();
        expect(headerTagTextTag).toBe(expectedTag);
    });
});
