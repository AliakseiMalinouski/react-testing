import React from "react";
import { Input } from "./Input";
import { render, fireEvent } from "@testing-library/react";

describe('Input tests', () => {
    test('render test', () => {
        const inputCompoment = render(<Input/>);
        const button = inputCompoment.getByRole('button');
        const input = inputCompoment.getByTestId('input');
        fireEvent.change(input);
        fireEvent.click(button);
    }); 
});