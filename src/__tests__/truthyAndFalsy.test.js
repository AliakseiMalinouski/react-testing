describe('Truthy and Falsy', () => {
    const value = 'value';
    const nullableValue = null;
    const undefinedValue = undefined;
    const listFalsyValues = ['', false, NaN, 0, null, undefined];
    const listTruthyValues = [1, 'string', {}, [], -1];
    it('toBeNull', () => {
        expect(nullableValue).toBeNull();
    });

    it('toBeUndefined', () => {
        expect(undefinedValue).toBeUndefined();
    });

    it.each(listFalsyValues)('toBeFalsy', (value) => {
        expect(value).toBeFalsy();
    });

    it.each(listTruthyValues)('toBeTruthy', (value) => {
        expect(value).toBeTruthy();
    });

    it('not.toBeTruthy', () => {
        expect(nullableValue).not.toBeTruthy();
    });

    it('not.toBeFalsy', () => {
        expect(value).not.toBeFalsy();
    });

});