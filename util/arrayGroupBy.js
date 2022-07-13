const arrayGroupBy = (arr, key) => {
    return arr.reduce((acc, val) => {
        acc[val[key]] = acc[val[key]] ? [...acc[val[key]], val] : [val]
        return acc;
    }, {})
}

module.exports = arrayGroupBy