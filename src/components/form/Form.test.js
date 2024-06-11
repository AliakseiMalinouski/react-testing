import React from "react";
import { Form } from "./Form";
import { fireEvent, render } from "@testing-library/react";

describe('Form tests', () => {
    test('render test', () => {
        const formComponent = render(<Form />);
        const input = formComponent.getByRole('textbox');

        fireEvent.change(input, {
            target: {
                value: 'data'
            },
        });
    });
}); 