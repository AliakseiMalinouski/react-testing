import { render } from "@testing-library/react";
import { Content } from "./Content";


describe('Content component tests', () => {
    test('render test', () => {


        // getBy - not match - throw error, sync
        // queryBy - not match - return null, sync
        // findBy - not match - throw error, async

        const { getByTestId } = render(<Content/>);
        const expectedTag = 'P';
        const paragraphTestId = 'content-paragraph-test-id';

        const paragraph = getByTestId(paragraphTestId);

        const paragraphTagName = paragraph.tagName;

        expect(paragraph).toBeTruthy();
        expect(paragraphTagName).toBe(expectedTag);
    });
});
