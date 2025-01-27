const convertBigIntToString = (data) => {
    return JSON.parse(JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));
};

module.exports = { convertBigIntToString };