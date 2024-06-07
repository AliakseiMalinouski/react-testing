const calculateValidLink = (link) => {

    if(!link) return false;

    const httpProtocol = 'http';
    const httpsProtocol = 'https';

    const supportedRegionsDomains = ['com', 'ru', 'pl'];

    const unexpectedSymbols = ['*', '!', '~'];

    const isValidLink = 
        (link.includes(httpsProtocol) 
        || link.includes(httpProtocol))
        && supportedRegionsDomains.some((elem) => link.includes(elem))
        && unexpectedSymbols.every((elem) => !link.includes(elem));


    if(isValidLink) return true;

    else return false;

}


describe('Calculate valid link test', () => {
    test('test http protocol and com region link', () => {
        const link = 'http://domain.com/hehe';
        expect(calculateValidLink(link)).toBe(true);
    });
    
    it('test https protocol and ru region link', () => {
        const link = 'https://domain.ru/hehe';
        expect(calculateValidLink(link)).toBe(true);
    });

    it('test https protocol and pl region link', () => {
        const link = 'https://domain.pl/hehe';
        expect(calculateValidLink(link)).toBe(true);
    });

    it('test invalid link without protocol', () => {
        const link = 'htt://domain.ru/hehe';
        expect(calculateValidLink(link)).toBe(false);
    });

    it('test invalid link with unexpected symbols', () => {
        const link = 'https~://domain.ru/hehe/*!';
        expect(calculateValidLink(link)).toBe(false);
    });
})