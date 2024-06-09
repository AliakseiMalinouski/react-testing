describe('Matchers tests', () => {
    const someInt = 999;
    const someString = 'string';
    const currencies = ['USD', 'EUR', 'PLN'];
    it('to equal', () => {
        const int = Math.floor(Math.random());
        expect(typeof int === 'number').toEqual(true);
    });
    
    it('toBeGreaterThan', () => {
        expect(someInt).toBeGreaterThan(998);
    });

    it('toBeGreaterOrEqual', () => {
        expect(someInt).toBeGreaterThanOrEqual(someInt);
    });
    
    it('toBeLessThan', () => {
        expect(someInt).toBeLessThan(1000);
    });

    it('toBeLessOrEqual', () => {
        expect(someInt).toBeLessThanOrEqual(someInt);
    });

    it('toMatch', () => {
        expect(someString).toMatch(someString);
    });

    it('toContain', () => {
        expect(currencies).toContain('USD');
    });
}); 