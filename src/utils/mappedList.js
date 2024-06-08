const rawList = [
    {
        id: '1',
        title: 'first item',
    },
    {
        id: '2',
        title: 'second item',
    },
]

const mappedList = (elem) => ({
    ...elem,
    id: Number(elem.id)
});

export {
    rawList,
    mappedList,
}