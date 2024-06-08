import { mappedList, rawList } from "../utils/mappedList";

beforeEach(() => {
    console.log('mapped list test is running');
});

beforeAll(() => {
    console.log('all test have already started');
});

describe('Test mappedList util', () => {
    it('test elem id to number', () => {
        rawList.map(mappedList).forEach((elem) => expect(typeof elem.id === 'number').toBe(true));
    });
});

afterEach(() => {
    console.log('mapped list test already has completed');
});

afterAll(() => {
    console.log('all test already have finished');
});