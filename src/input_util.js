/** @module */

/**
 * Converts object-based dataframe to array-based dataframe
 *
 * @param {Object} data - an object with each property representing
 *      dataframe column as array of equal length
 * @returns {Object[]} - array of objects with same properties
 */
export function convertDataframe(data) {
    const columns = Object.getOwnPropertyNames(data);
    const size = data[columns[0]].length;
    const result = [];
    for (let i = 0; i < size; i++) {
        let item = {};
        for (let column of columns) {
            item[column] = data[column][i];
        }
        result.push(item);
    }
    return result;
};

export function maybeConvertDataframe(...objects) {
    return objects.map(obj => {
        if (obj && !Array.isArray(obj)) {
            obj = convertDataframe(obj);
        }
        return obj;
    });
};

/**
 * Converts array-based dataframe to object-based dataframe
 *
 * @param {Object[]} data - an object with each property representing
 *      dataframe column as array of equal length
 * @returns {Object} - array of objects with same properties
 */
export function convertToDataframe(data) {
    const result = {};
    const columns = Object.getOwnPropertyNames(data[0]);
    for (let column of columns) {
        result[column] = data.map(item => item[column]);
    }
    return result;
}
