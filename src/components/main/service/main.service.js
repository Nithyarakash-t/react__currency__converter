import * as exchangeRate from '../assets/usd.json';

/**
 * Convert currency 1 value to currency 2 equivalent
 * 
 * @param {*} id_1 : string -- Currency 1
 * @param {*} val_1 :number -- Currency 1 value
 * @param {*} id_2 :string -- Currency 2
 * @returns converted value
 */
export const convert =  (id_1, val_1, id_2) => {
    const input = extractValueByKey(exchangeRate, id_1);
    const target = extractValueByKey(exchangeRate, id_2);

    // convert id_1 value to USD value
    val_1 = val_1 * input?.inverseRate;
    
    // convert USD value to new value
    val_1 = val_1 * target?.rate;

    // round
    val_1 = Math.round((val_1 + Number.EPSILON) * 100) / 100
    return val_1;
}

/**
 * 
 * @param {*} obj -- JSON 
 * @param {*} key  -- key
 * @returns relevant object
 */
function extractValueByKey(obj, key) {
    return Object.values(obj)[Object.keys(obj).indexOf(key)];
}

/**
 * REDUNDANT
 * @param {*} obj -- JSON
 * @param {*} value -- value
 * @returns relevant object
 * 
 * function extractKeybyValue(obj, value) {
    return Object.keys(obj)[Object.values(obj).indexOf(value)];
    }
 */
