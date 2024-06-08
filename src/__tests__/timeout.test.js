const delay = 5000;
const randomNumber = 4999;

jest.setTimeout(delay);

describe('test timeout', () => {
    it('some test', () => {
        expect(delay > randomNumber).toBe(true);
    }, delay);
})