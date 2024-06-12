import React from "react";
import { Cover } from "./Cover";
import { render } from "@testing-library/react";

const text = 'some text';
const title = 'some title';
const items = ['item1', 'item2', 'item3']

describe('Cover tests', () => {
    test('Cover render test', () => {
       const { container } = render(<Cover text={text} title={title} items={items}/>);
       expect(container).toMatchSnapshot();
    })
});