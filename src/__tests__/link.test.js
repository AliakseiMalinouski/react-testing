import { validateLink } from "../utils/validateLink";

describe('Calculate valid link test', () => {
    test('test http protocol and com region link', () => {
        const link = 'http://domain.com/hehe';
        expect(validateLink(link)).toBe(true);
    });
    
    it('test https protocol and ru region link', () => {
        const link = 'https://domain.ru/hehe';
        expect(validateLink(link)).toBe(true);
    });

    it('test https protocol and pl region link', () => {
        const link = 'https://domain.pl/hehe';
        expect(validateLink(link)).toBe(true);
    });

    it('test invalid link without protocol', () => {
        const link = 'htt://domain.ru/hehe';
        expect(validateLink(link)).toBe(false);
    });

    it('test invalid link with unexpected symbols', () => {
        const link = 'https~://domain.ru/hehe/*!';
        expect(validateLink(link)).toBe(false);
    });
})