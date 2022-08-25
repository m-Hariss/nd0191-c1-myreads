// Utils
export { default as cloneDeep } from 'lodash/cloneDeep';
export { default as isArray } from 'lodash/isArray';
export { default as isEmpty } from 'lodash/isEmpty';


export const listToObjectByKeyValue = (list, key) => {
    const obj = {};

    list.forEach(item => {
        obj[item[key]] = obj[item[key]] || [];
        obj[item[key]].push(item);
    });

    return obj;
};
