import { handleCaughtError } from "../utils/handleCaughtError";

describe('Testing errors', () => {
    it('toThrow', () => {
        expect(handleCaughtError).toThrow();
    });
});