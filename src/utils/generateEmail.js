const userData = {
    age: 21,
    name: 'Aliaksei',
    lastname: 'Malinouski'
}

const invalidUserData = {
    age: 0,
    name: '',
    lastname: '',
}

const generateEmail = ({ name, lastname, age }) => {
    if(!name || !lastname || !age) {
        return '';
    }

    const mandatoryLength = 3;

    if(name.length < mandatoryLength || lastname.length === mandatoryLength) {
        return '';
    }

    const mandatoryAge = 18;

    if(age < mandatoryAge) return false;

    const preparedEmail = `${name}${lastname}${age}@gmail.com`;

    return preparedEmail;

}

export {
    userData,
    generateEmail,
    invalidUserData,
}