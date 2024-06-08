import { getPositiveNumber, unpositiveNumbersList, listNumbersList } from "../utils/getPositiveNumber";

describe('get positive numbers test', () => {
    it.each(unpositiveNumbersList)('convert to potisive number test', (number) => {
        const result = getPositiveNumber(number);
        const isValidResult = result === 0 || result === 1 || result > 1;
        expect(isValidResult).toBe(true);
    });

    it.each(listNumbersList)('%i plus %i should be %i', (a, b, total) => {
        expect(a + b).toBe(total);
    });
});