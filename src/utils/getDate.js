const dateTesting = '08.06.2024';

const getDate = (date) => {
    if(!date) return null;
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `0${day}.0${month + 1}.${year}`;

}

export {
    getDate,
    dateTesting,
}