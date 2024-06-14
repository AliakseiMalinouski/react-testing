import React from "react";
import { Cover } from "./Cover";
import { render, fireEvent } from "@testing-library/react";

const text = 'some text';
const title = 'some title';
const items = [
    {
        id: 1,
        title: 'item1',
        checked: false,
    },
    {
        id: 2,
        title: 'item2',
        checked: false,
    },
    {
        id: 3,
        title: 'item3',
        checked: false,
    }
]

describe('Cover tests', () => {
    test('Cover render test', () => {
       const { container } = render(<Cover text={text} title={title} items={items}/>);
       expect(container).toMatchSnapshot();
    });

    test('Should display title', () => {
        const { queryByText } = render(<Cover text={text} title={title} items={items}/>);
        const titleQuery = queryByText(title);
        expect(titleQuery).toBeTruthy();
    });

    test('Should display text', () => {
        const { queryByText } = render(<Cover text={text} title={title} items={items}/>);
        const textQuery = queryByText(text);
        expect(textQuery).toBeTruthy();
    });

    test('Should display items', () => {
        const { getByTestId } = render(<Cover text={text} title={title} items={items}/>);
        const minItemsLength = 2;
        const testiId = 'items-test-id';
        const itemsWrapper = getByTestId(testiId);
        expect(itemsWrapper.children.length).toBeGreaterThan(minItemsLength);
    });

    test('onClick test', () => {
        const { getByTestId } = render(<Cover text={text} title={title} items={items}/>);
        const testiId = 'items-test-id';
        const { id } = Object.values(items)[Math.floor(Math.random()) * items.length];
        const randomItemId = `item-test-id-${id}`;
        const randomItem = getByTestId(randomItemId);
        fireEvent.click(randomItem);
    });

    test('onClick test trigger', () => {
        const onClickTrigger = jest.fn();
        const { container } = render(<Cover text={text} title={title} items={items} onClick={onClickTrigger}/>);
    });

    test('item button test', () => {
        const onClickTrigger = jest.fn();
        const { container, getByRole } = render(<Cover text={text} title={title} items={items} onClick={onClickTrigger}/>);
        expect(getByRole('button', { type: 'button' })).toBeTruthy();
    });

    test('input value test', () => {
        const onClickTrigger = jest.fn();
        const inputValue = 'input value';
        const { container, getByRole, getByTestId } = render(<Cover text={text} title={title} items={items} inputValue={inputValue} onClick={onClickTrigger}/>);
        expect(getByTestId("input-with-prop-value").value).toBe(inputValue);
    });
});