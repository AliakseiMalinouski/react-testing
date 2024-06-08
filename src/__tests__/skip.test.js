import { getDate, dateTesting } from "../utils/getDate";


describe('get date tests', () => {
    it('invalid date test', () => {
        expect(getDate(undefined)).toBe(null);
    })

    it.skip('valid date test', () => {
        expect(getDate(new Date())).toBe(dateTesting);
    });
}); 