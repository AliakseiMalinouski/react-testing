import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";

describe('Header component tests', () => {
    test('Header render test', () => {
        const headerComponent = render(<Header/>);
    });
});
