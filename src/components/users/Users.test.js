import React from "react";
import { Users } from "./User";
import { fireEvent, render, waitFor } from '@testing-library/react';


describe('Users tests', () => {
    test('fetch test', async () => {
        const { container, getByTestId } = render(<Users url={'https://jsonplaceholder.typicode.com/users'}/>);
        const buttonOnLoad = getByTestId('button-request');
        fireEvent.click(buttonOnLoad);
        await  waitFor(() => {
            const usersWrapper = container.querySelector('.users-wrapper');
            expect(usersWrapper).toBeTruthy();
        });
    })
});