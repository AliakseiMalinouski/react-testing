const validateLink = (link) => {

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

export {
    validateLink,
}