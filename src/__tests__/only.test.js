import { generateEmail, userData, invalidUserData } from "../utils/generateEmail";

describe('Generate email tests', () => {
    test('test invalid email', () => {
        expect(generateEmail(invalidUserData)).toBe('');
    });
    
    test.only('test correct email', () => {
        expect(generateEmail(userData)).toBe(`${userData.name}${userData.lastname}${userData.age}@gmail.com`);
    }); 
});
