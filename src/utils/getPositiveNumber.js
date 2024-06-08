const unpositiveNumbersList = [-1, -3, -5, -6];

const listNumbersList = [
    [2,2,4],
    [3,3,6],
    [4,4,8],
]

const getPositiveNumber = (number) => {
    if(number === 0) {
        return 0;
    }
    if(number === 1 || number === -1) {
        return 1;
    }

    return number * number / 2;
};

export {
    listNumbersList,
    getPositiveNumber,
    unpositiveNumbersList,
}